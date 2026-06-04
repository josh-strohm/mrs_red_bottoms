"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const serviceTypes = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "Move-in/Move-out Cleaning",
  "Deep Cleaning",
  "Estate Clean-out",
  "Foreclosure Clean-out",
  "Hoarding Clean-out",
  "Other",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--red-accent)]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--red-accent)]/10 text-[var(--red-accent)] text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Contact Us
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-heading text-5xl md:text-6xl font-bold text-charcoal leading-tight mb-6"
            >
              Get in <span className="text-[var(--red-accent)]">Touch</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-charcoal-light leading-relaxed"
            >
              Have a question or ready to schedule your cleaning? We're here to help.
              Send us a message and we'll get back to you within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-charcoal">
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-[var(--red-accent)]/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-[var(--red-accent)]" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-charcoal-light mb-6">
                        Thank you for contacting us. We'll get back to you within 24
                        hours.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="border-charcoal/20 text-charcoal"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-12"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(814) 656-4993"
                            value={formData.phone}
                            onChange={handleChange}
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, service: value || "" }))
                          }
                        >
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your cleaning needs..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[var(--red-accent)] hover:bg-[var(--red-dark)] text-white text-lg py-6"
                        disabled={isLoading}
                      >
                        {isLoading ? "Sending..." : "Send Message"}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <Card className="border-none shadow-xl bg-charcoal text-white">
                <CardContent className="pt-6">
                  <h3 className="font-heading text-2xl font-bold mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--red-accent)]/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[var(--red-accent)]" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Address</p>
                        <p className="text-gray-300">
                          625 Sharrar Dr
                          <br />
                          Altoona, PA 16602
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--red-accent)]/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-[var(--red-accent)]" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Phone</p>
                        <a
                          href="tel:+18146564993"
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          (814) 656-4993
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--red-accent)]/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-[var(--red-accent)]" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <a
                          href="mailto:mrsredbottomscleaning@gmail.com"
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          mrsredbottomscleaning@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--red-accent)]/20 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-[var(--red-accent)]" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Business Hours</p>
                        <div className="text-gray-300 space-y-1">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 2:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl">
                <CardContent className="pt-6">
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-4">
                    Quick Response
                  </h3>
                  <p className="text-charcoal-light mb-4">
                    We typically respond to all inquiries within 24 hours. For immediate
                    assistance, feel free to give us a call.
                  </p>
                  <a href="tel:+18146564993">
                    <Button className="w-full bg-[var(--red-accent)] hover:bg-[var(--red-dark)] text-white">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Us Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Visit Our <span className="text-[var(--red-accent)]">Location</span>
            </h2>
            <p className="text-xl text-charcoal-light mb-8">
              Stop by our office in Altoona during business hours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-[var(--red-accent)]/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-12 h-12 text-[var(--red-accent)]" />
                </div>
                <p className="font-heading text-2xl font-bold text-charcoal">
                  625 Sharrar Dr
                </p>
                <p className="text-charcoal-light text-lg">Altoona, PA 16602</p>
              </div>
              <div>
                <p className="text-charcoal-light mb-4">
                  We're located in Altoona, PA and serve all of Blair County and
                  surrounding areas. Our office is conveniently located with ample
                  parking.
                </p>
                <Link href="/service-areas">
                  <Button
                    variant="outline"
                    className="border-[var(--red-accent)] text-[var(--red-accent)] hover:bg-[var(--red-accent)] hover:text-white"
                  >
                    View Service Areas
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}