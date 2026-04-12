"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2, Home, Building2, Sparkles } from "lucide-react";

const serviceTypes = [
  {
    value: "residential",
    label: "Residential Cleaning",
    description: "Homes, apartments, condos",
    icon: Home,
  },
  {
    value: "commercial",
    label: "Commercial Cleaning",
    description: "Offices, retail spaces",
    icon: Building2,
  },
  {
    value: "cleanout",
    label: "Clean-Out",
    description: "Move-in/move-out, estate, foreclosure",
    icon: Sparkles,
  },
  {
    value: "specialty",
    label: "Specialty/Deep Cleaning",
    description: "Post-construction, seasonal deep clean",
    icon: Sparkles,
  },
];

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    squareFootage: "",
    preferredDate: "",
    additionalDetails: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
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
              Get a Free Quote
            </h1>
            <p className="text-xl text-[#4A4A4A] leading-relaxed">
              Ready to experience the Ms Red Bottoms difference? Tell us about your 
              cleaning needs and we'll get back to you within 24 hours with a 
              customized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {isSubmitted ? (
            <Card className="border-[#C41E3A] bg-[#C41E3A]/5 max-w-xl mx-auto">
              <CardContent className="p-12 text-center">
                <CheckCircle2 className="w-20 h-20 text-[#C41E3A] mx-auto mb-6" />
                <h2 className="font-heading text-3xl font-semibold text-[#1A1A1A] mb-4">
                  Quote Request Received!
                </h2>
                <p className="text-[#4A4A4A] mb-8 leading-relaxed">
                  Thank you for reaching out. We've received your quote request and 
                  will be in touch within 24 hours. In the meantime, feel free to 
                  explore our services or contact us directly.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/">
                    <Button className="bg-[#C41E3A] hover:bg-[#A01830] text-white font-medium">
                      Back to Home
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border-[#1A1A1A] text-[#1A1A1A]">
                      Contact Us Directly
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Service Type Selection */}
              <div className="lg:col-span-1">
                <h2 className="font-heading text-2xl font-semibold text-[#1A1A1A] mb-6">
                  Select Your Service
                </h2>
                <div className="space-y-4">
                  {serviceTypes.map((service) => (
                    <button
                      key={service.value}
                      type="button"
                      onClick={() => handleChange("serviceType", service.value)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        formData.serviceType === service.value
                          ? "border-[#C41E3A] bg-[#C41E3A]/5"
                          : "border-gray-200 hover:border-[#C41E3A]/50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            formData.serviceType === service.value
                              ? "bg-[#C41E3A] text-white"
                              : "bg-[#F5F5F5] text-[#4A4A4A]"
                          }`}
                        >
                          <service.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#1A1A1A]">
                            {service.label}
                          </p>
                          <p className="text-sm text-[#4A4A4A]">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
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
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        placeholder="814-656-4993"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                        Property Address *
                      </label>
                      <Input
                        type="text"
                        placeholder="123 Main St, Altoona, PA"
                        value={formData.address}
                        onChange={(e) => handleChange("address", e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                        Square Footage (Optional)
                      </label>
                      <Input
                        type="text"
                        placeholder="e.g., 2000 sq ft"
                        value={formData.squareFootage}
                        onChange={(e) => handleChange("squareFootage", e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                        Preferred Date
                      </label>
                      <Input
                        type="text"
                        placeholder="e.g., Next Monday"
                        value={formData.preferredDate}
                        onChange={(e) => handleChange("preferredDate", e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      Additional Details
                    </label>
                    <Textarea
                      placeholder="Tell us more about your cleaning needs (frequency, specific areas, special requirements, etc.)"
                      value={formData.additionalDetails}
                      onChange={(e) => handleChange("additionalDetails", e.target.value)}
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading || !formData.serviceType}
                    className="w-full bg-[#C41E3A] hover:bg-[#A01830] text-white font-medium py-6 text-lg"
                  >
                    {isLoading ? (
                      "Submitting..."
                    ) : (
                      <>
                        Request My Free Quote
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-sm text-[#4A4A4A]">
                    By submitting this form, you agree to be contacted regarding your 
                    quote request. We respect your privacy and will never share your 
                    information.
                  </p>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-6">
              Why Request a Quote?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#C41E3A]/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#C41E3A]" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#1A1A1A] mb-3">
                  Free & No Obligation
                </h3>
                <p className="text-[#4A4A4A]">
                  Our quotes are completely free with no obligation. You can accept, 
                  decline, or ask questions — no pressure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#C41E3A]/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#C41E3A]" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#1A1A1A] mb-3">
                  Personalized Estimate
                </h3>
                <p className="text-[#4A4A4A]">
                  Every space is unique. We provide customized quotes based on your 
                  specific needs and property details.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#C41E3A]/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#C41E3A]" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#1A1A1A] mb-3">
                  Quick Response
                </h3>
                <p className="text-[#4A4A4A]">
                  We respond to all quote requests within 24 hours. Get the answers 
                  you need without the wait.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}