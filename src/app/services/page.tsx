"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Home,
  Building2,
  Trash2,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Cleaning",
    subtitle: "Homes, Apartments & Condos",
    description:
      "Our signature cleaning service for private residences. Whether you need routine housekeeping or a one-time deep clean, we bring the same attention to detail to every home we serve.",
    features: [
      "Routine housekeeping (weekly, bi-weekly, monthly)",
      "Deep cleaning for neglected spaces",
      "Move-in/move-out cleaning",
      "Post-construction cleaning",
      "Bedroom, bathroom, and kitchen detailed cleaning",
      "Dusting, vacuuming, mopping all floors",
      "Surface cleaning and sanitization",
    ],
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Cleaning",
    subtitle: "Offices, Retail & Common Areas",
    description:
      "Professional cleaning solutions for businesses throughout Blair County. We understand that a clean workspace projectes a professional image and creates a healthier environment for employees and customers.",
    features: [
      "Office cleaning (daily, weekly, customized)",
      "Retail space cleaning",
      "Common area maintenance",
      "Restroom cleaning and sanitization",
      "Floor care (vacuuming, mopping, stripping/waxing)",
      "Window washing (interior)",
      "Trash removal and recycling",
    ],
  },
  {
    id: "cleanouts",
    icon: Trash2,
    title: "Clean-Outs",
    subtitle: "Estate, Foreclosure & Hoarding",
    description:
      "Comprehensive cleaning and decluttering services for challenging situations. We're here to help with transitions, clearances, and fresh starts — no job is too big or too complex.",
    features: [
      "Estate clean-outs",
      "Foreclosure clean-outs",
      "Hoarding situations",
      "Garage and basement clearances",
      "Attic and storage clean-outs",
      "Property management turns",
      "Deep junk removal and disposal",
    ],
  },
  {
    id: "specialty",
    icon: Clock,
    title: "Deep Cleaning",
    subtitle: "Specialty & One-Time Projects",
    description:
      "For those times when ordinary cleaning isn't enough. Our deep cleaning services target built-up grime and reach the places regular cleaning misses.",
    features: [
      "Seasonal deep cleaning",
      "Post-construction cleaning",
      "Move-in/move-out deep clean",
      "One-time deep projects",
      "Interior window cleaning",
      "Appliance cleaning (inside and out)",
      "Baseboard and trim cleaning",
    ],
  },
];

const serviceProcess = [
  {
    step: 1,
    title: "Request a Quote",
    description:
      "Contact us to describe your cleaning needs. We'll gather the details and provide a free, no-obligation quote.",
  },
  {
    step: 2,
    title: "We Come to You",
    description:
      "Our team arrives on time, fully equipped, and ready to transform your space.",
  },
  {
    step: 3,
    title: "You Relax",
    description:
      "While we handle every detail, you enjoy your freshly cleaned home or business.",
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

export default function ServicesPage() {
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
                Our Services
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-heading text-5xl md:text-6xl font-bold text-charcoal leading-tight mb-6"
            >
              Premium Cleaning for Every{" "}
              <span className="text-[var(--red-accent)]">Need</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-charcoal-light leading-relaxed"
            >
              From routine housekeeping to complex clean-outs, we offer comprehensive cleaning
              services backed by quality, reliability, and a satisfaction guarantee.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--red-accent)] flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-charcoal">
                        {service.title}
                      </h3>
                      <p className="text-[var(--red-accent)] font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-charcoal-light mb-6 text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[var(--red-accent)] flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/quote">
                    <Button className="bg-[var(--red-accent)] hover:bg-[var(--red-dark)] text-white">
                      Request Quote
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Card className="border-none shadow-2xl overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-[var(--red-accent)]/30" />
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-4">
              How It <span className="text-[var(--red-accent)]">Works</span>
            </h2>
            <p className="text-xl text-charcoal-light max-w-2xl mx-auto">
              Getting started is simple. Here's what to expect when you work with
              us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-[var(--red-accent)] text-white flex items-center justify-center text-xl font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
                      {step.title}
                    </h3>
                    <p className="text-charcoal-light">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-[var(--red-accent)]">Transform</span> Your
              Space?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free quote today. We'd love to hear about your cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button
                  size="lg"
                  className="bg-[var(--red-accent)] hover:bg-[var(--red-dark)] text-white text-lg px-8 py-6"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-6"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}