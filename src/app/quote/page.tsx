"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CheckCircle,
  Home,
  Building2,
  Trash2,
  Clock,
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
  {
    id: "residential",
    icon: Home,
    label: "Residential Cleaning",
    description: "Homes, apartments, condos",
  },
  {
    id: "commercial",
    icon: Building2,
    label: "Commercial Cleaning",
    description: "Offices, retail spaces",
  },
  {
    id: "movein",
    icon: Clock,
    label: "Move-in/Move-out",
    description: "Transition cleaning",
  },
  {
    id: "deep",
    icon: Sparkles,
    label: "Deep Cleaning",
    description: "Thorough top-to-bottom",
  },
  {
    id: "cleanout",
    icon: Trash2,
    label: "Clean-Out",
    description: "Estate, foreclosure, hoarding",
  },
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

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    sqft: "",
    preferredDate: "",
    details: "",
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
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--red-accent)]/5 rounded-full blur-3xl" />
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
                Free Quote
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-heading text-5xl md:text-6xl font-bold text-charcoal leading-tight mb-6"
            >
              Get Your{" "}
              <span className="text-[var(--red-accent)]">Free Quote</span> Today
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-charcoal-light leading-relaxed"
            >
              Fill out the form below and we'll get back to you within 24 hours with a
              customized quote for your cleaning needs. No obligation, no pressure — just honest,
              transparent pricing.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-none shadow-2xl">
                <CardContent className="pt-12 pb-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-[var(--red-accent)]/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[var(--red-accent)]" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-charcoal mb-4">
                    Quote Request Received!
                  </h2>
                  <p className="text-xl text-charcoal-light mb-8 max-w-md mx-auto">
                    Thank you for your interest in Ms Red Bottoms Cleaning Solutions. We'll
                    review your information and get back to you within 24 hours with your
                    customized quote.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                      <Button className="bg-[var(--red-accent)] hover:bg-[var(--red-dark)] text-white">
                        Return Home
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="border-charcoal/20 text-charcoal">
                        Contact Us Directly
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-none shadow-2xl">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="font-heading text-2xl text-charcoal">
                    Quote Request Form
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Service Type Selection */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold text-charcoal">
                        What type of service do you need? *
                      </Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {serviceTypes.map((service) => (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                serviceType: service.label,
                              }))
                            }
                            className={`p-4 rounded-xl border-2 transition-all text-left ${
                              formData.serviceType === service.label
                                ? "border-[var(--red-accent)] bg-[var(--red-accent)]/5"
                                : "border-gray-200 hover:border-[var(--red-accent)]/50"
                            }`}
                          >
                            <service.icon
                              className={`w-6 h-6 mb-2 ${
                                formData.serviceType === service.label
                                  ? "text-[var(--red-accent)]"
                                  : "text-charcoal-light"
                              }`}
                            />
                            <p
                              className={`font-medium ${
                                formData.serviceType === service.label
                                  ? "text-[var(--red-accent)]"
                                  : "text-charcoal"
                              }`}
                            >
                              {service.label}
                            </p>
                            <p className="text-sm text-charcoal-light">
                              {service.description}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Contact Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(814) 656-4993"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2 md:col-span-2">
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

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">Property Address *</Label>
                        <Input
                          id="address"
                          name="address"
                          placeholder="123 Main St, Altoona, PA 16602"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="sqft">Square Footage (Optional)</Label>
                        <Input
                          id="sqft"
                          name="sqft"
                          type="number"
                          placeholder="1500"
                          value={formData.sqft}
                          onChange={handleChange}
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">Preferred Date</Label>
                        <Input
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="h-12"
                        />
                      </div>
                    </div>

                    {/* Additional Details */}
                    <div className="space-y-2">
                      <Label htmlFor="details">Additional Details</Label>
                      <Textarea
                        id="details"
                        name="details"
                        placeholder="Tell us more about your cleaning needs — number of rooms, bathrooms, any special requirements..."
                        value={formData.details}
                        onChange={handleChange}
                        rows={4}
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[var(--red-accent)] hover:bg-[var(--red-dark)] text-white text-lg py-6"
                      disabled={isLoading}
                    >
                      {isLoading ? "Submitting..." : "Request Free Quote"}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>

                    <p className="text-center text-charcoal-light text-sm">
                      By submitting this form, you agree to be contacted by Ms
                      Red Bottoms Cleaning Solutions regarding your quote request.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>

      {/* Why Get a Quote */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Why Request a <span className="text-[var(--red-accent)]">Quote</span>
            </h2>
            <p className="text-xl text-charcoal-light">
              Here's what you can expect when you work with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Free & No Obligation",
                description:
                  "Our quotes are completely free with no obligation. You can compare and decide without pressure.",
              },
              {
                title: "Personalized Pricing",
                description:
                  "Every space is different. We provide customized quotes based on your specific needs and property.",
              },
              {
                title: "Quick Response",
                description:
                  "We respond to all quote requests within 24 hours. No waiting around for days to hear back.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="pt-6">
                    <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-charcoal-light">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Still Have <span className="text-[var(--red-accent)]">Questions</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Prefer to talk to us directly? We're happy to answer your questions and discuss
              your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[var(--red-accent)] hover:bg-[var(--red-dark)] text-white text-lg px-8 py-6"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+18146564993">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-6"
                >
                  Call (814) 656-4993
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}