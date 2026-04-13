"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

const serviceTypes = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "Move-In/Move-Out Clean-Out",
  "Estate Clean-Out",
  "Foreclosure Clean-Out",
  "Hoarding Clean-Out",
  "Deep Cleaning",
  "Post-Construction Cleaning",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://n8n.srv945929.hstgr.cloud/webhook/df10145e-017f-4b2a-b533-30890bdf59a1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
            submittedAt: new Date().toISOString(),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value || "" }));
  };

  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#F5F5F5] via-white to-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-semibold text-[#1A1A1A] leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-[#4A4A4A] leading-relaxed">
              Have questions or ready to book? We'd love to hear from you. Reach out 
              today and let's discuss how we can help with your cleaning needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-3xl font-semibold text-[#1A1A1A] mb-6">
                Send Us a Message
              </h2>
              <p className="text-[#4A4A4A] mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <Card className="border-[#C41E3A] bg-[#C41E3A]/5">
                  <CardContent className="p-8 text-center">
                    <CheckCircle2 className="w-16 h-16 text-[#C41E3A] mx-auto mb-4" />
                    <h3 className="font-heading text-2xl font-semibold text-[#1A1A1A] mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-[#4A4A4A]">
                      Thank you for reaching out. We'll be in touch soon.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="814-656-4993"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                        Service Interested In
                      </label>
                      <Select
                        value={formData.service || ""}
                        onValueChange={(value) => handleChange("service", value ?? "")}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Tell us about your cleaning needs..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#C41E3A] hover:bg-[#A01830] text-white font-medium py-6 text-lg"
                  >
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>

                  {error && (
                    <p className="text-red-600 text-center mt-4">{error}</p>
                  )}
                </form>
              )}

              {/* Map - Below form on left */}
              <div className="h-[300px] rounded-2xl overflow-hidden shadow-lg mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48228.93522457744!2d-78.4100537240894!3d40.51867497156168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cb85fc8f52fbe5%3A0x3b41a2b1f82e2f1e!2sAltoona%2C%20PA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Altoona, PA Location Map"
                />
              </div>
            </div>

            {/* Contact Info on right */}
            <div>
              <h2 className="font-heading text-3xl font-semibold text-[#1A1A1A] mb-6">
                Get In Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#C41E3A]/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6 text-[#C41E3A]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1A1A1A] mb-1">Address</p>
                        <p className="text-[#4A4A4A]">
                          705 Lincoln Manor<br />
                          Altoona, PA 16602
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#C41E3A]/10 flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-[#C41E3A]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1A1A1A] mb-1">Phone</p>
                        <p className="text-[#4A4A4A]">814-656-4993</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#C41E3A]/10 flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6 text-[#C41E3A]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1A1A1A] mb-1">Email</p>
                        <p className="text-[#4A4A4A]">info@msredbottoms.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#C41E3A]/10 flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 text-[#C41E3A]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1A1A1A] mb-1">Business Hours</p>
                        <p className="text-[#4A4A4A]">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Get your free quote today and experience the Mrs Red Bottoms difference.
          </p>
          <Link href="/quote">
            <Button className="bg-[#C41E3A] hover:bg-[#A01830] text-white font-medium px-8 py-6 text-lg">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}