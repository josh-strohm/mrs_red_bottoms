"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Trash2,
  Sparkles,
  Shield,
  Clock,
  Award,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description:
      "Routine housekeeping, deep cleaning, and move-in/move-out services for homes, apartments, and condos.",
    href: "/services",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description:
      "Professional cleaning for offices, retail spaces, and common areas in Blair County.",
    href: "/services",
  },
  {
    icon: Trash2,
    title: "Clean-Outs",
    description:
      "Estate clean-outs, foreclosure, hoarding situations, garage, and basement clearances.",
    href: "/services",
  },
  {
    icon: Sparkles,
    title: "Deep & Specialty",
    description:
      "Post-construction cleaning, seasonal deep cleans, and one-time special projects.",
    href: "/services",
  },
];

const trustSignals = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Full liability insurance for your peace of mind",
  },
  {
    icon: Clock,
    title: "Reliable & On-Time",
    description: "We show up when we say we will",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Your satisfaction is our priority",
  },
  {
    icon: Users,
    title: "Locally Owned",
    description: "Serving Altoona since 2025",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Altoona, PA",
    rating: 5,
    text: "Ms Red Bottoms has transformed my home. The attention to detail is incredible. I've never seen my kitchen sparkle like this!",
  },
  {
    name: "James L.",
    location: "Hollidaysburg, PA",
    rating: 5,
    text: "We hired them for a move-out clean and were blown away. The place looked brand new. Highly recommend!",
  },
  {
    name: "Patricia K.",
    location: "Altoona, PA",
    rating: 5,
    text: "As a busy professional, I need someone I can trust in my home. Michelle and her team are professional, thorough, and trustworthy.",
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

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--red-accent)]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--red-accent)]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--red-accent)]/10 text-[var(--red-accent)] text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Premium Cleaning Services in Altoona, PA
              </span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-tight mb-6"
            >
              Where Every Detail{" "}
              <span className="text-[var(--red-accent)]">Shines</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-charcoal-light mb-8 leading-relaxed"
            >
              Experience the difference of a truly professional cleaning service.
              Locally owned and operated, we bring premium quality and meticulous
              attention to every home and business we serve in Altoona and surrounding
              areas.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/quote">
                <Button
                  size="lg"
                  className="bg-[var(--red-accent)] hover:bg-[var(--red-dark)] text-white text-lg px-8 py-6"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-charcoal/20 text-charcoal"
                >
                  Our Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-4">
              The Ms Red Bottoms <span className="text-[var(--red-accent)]">Difference</span>
            </h2>
            <p className="text-xl text-charcoal-light max-w-2xl mx-auto">
              We don't just clean. We transform your space into something you can be
              truly proud of.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => (
              <motion.div
                key={signal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg bg-gray-50/50">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--red-accent)]/10 flex items-center justify-center mb-4">
                      <signal.icon className="w-7 h-7 text-[var(--red-accent)]" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
                      {signal.title}
                    </h3>
                    <p className="text-charcoal-light">{signal.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
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
              Our <span className="text-[var(--red-accent)]">Services</span>
            </h2>
            <p className="text-xl text-charcoal-light max-w-2xl mx-auto">
              From routine housekeeping to complex clean-outs, we handle it all
              with the same level of care and excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[var(--red-accent)] flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="font-heading text-2xl text-charcoal">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-charcoal-light mb-4">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-[var(--red-accent)] font-medium hover:underline"
                    >
                      Learn more
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-[var(--red-accent)] text-[var(--red-accent)] hover:bg-[var(--red-accent)] hover:text-white"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-4">
              What Our <span className="text-[var(--red-accent)]">Clients Say</span>
            </h2>
            <p className="text-xl text-charcoal-light">
              We're proud to have earned the trust of homeowners and businesses
              throughout Blair County.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[var(--red-accent)] text-[var(--red-accent)]"
                        />
                      ))}
                    </div>
                    <p className="text-charcoal-light mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--red-accent)]/10 flex items-center justify-center">
                        <span className="text-[var(--red-accent)] font-semibold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-charcoal-light">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience the{" "}
              <span className="text-[var(--red-accent)]">Ms Red Bottoms</span>{" "}
              Difference?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free, no-obligation quote today. We're here to make your space shine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button
                  size="lg"
                  className="bg-[var(--red-accent)] hover:bg-[var(--red-dark)] text-white text-lg px-8 py-6"
                >
                  Get Your Free Quote
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

      {/* Service Area Highlight */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Serving{" "}
                <span className="text-[var(--red-accent)]">Altoona</span> & Surrounding Areas
              </h2>
              <p className="text-xl text-charcoal-light mb-8">
                Based right here in Altoona, we're proud to serve our local community.
                From Hollidaysburg to Tyrone, we bring premium cleaning services
                to homes and businesses throughout Blair County.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Altoona & vicinity",
                  "Hollidaysburg",
                  "Duncansville",
                  "Tyrone",
                  "Bellwood",
                  "Roaring Spring",
                ].map((area) => (
                  <li key={area} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--red-accent)]" />
                    <span className="text-charcoal">{area}</span>
                  </li>
                ))}
              </ul>
              <Link href="/service-areas">
                <Button className="bg-[var(--red-accent)] hover:bg-[var(--red-dark)] text-white">
                  View All Service Areas
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-96 lg:h-auto rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--red-accent)]/20 to-[var(--red-accent)]/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[var(--red-accent)] mx-auto mb-4" />
                  <p className="text-charcoal font-heading text-2xl font-semibold">
                    Altoona, PA
                  </p>
                  <p className="text-charcoal-light">Primary Service Area</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}