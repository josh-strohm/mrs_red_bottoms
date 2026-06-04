"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Clock,
  Heart,
  Shield,
  Award,
  ArrowRight,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Clock,
    title: "Reliability",
    description:
      "We show up on time, every time. When we schedule a clean, we keep that commitment.",
  },
  {
    icon: Heart,
    title: "Customer-First",
    description:
      "Your satisfaction is our top priority. We listen, adapt, and deliver to exceed expectations.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description:
      "Fully insured and background-checked. Your home and business are in safe hands.",
  },
  {
    icon: Award,
    title: "Attention to Detail",
    description:
      "We don't cut corners. Every detail matters, from baseboards to ceiling fans.",
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

export default function AboutPage() {
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
                About Us
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-heading text-5xl md:text-6xl font-bold text-charcoal leading-tight mb-6"
            >
              Meet the Face Behind{" "}
              <span className="text-[var(--red-accent)]">Ms Red Bottoms</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-charcoal-light mb-8 leading-relaxed"
            >
              Founded by Michelle Hartman in 2025, Ms Red Bottoms Cleaning Solutions
              LLC brings a fresh approach to professional cleaning in Altoona, PA.
              As a sole proprietor, Michelle personally oversees every job to ensure
              the exceptional quality that has become our signature.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Michelle <span className="text-[var(--red-accent)]">Hartman</span>
              </h2>
              <p className="text-xl text-charcoal-light mb-6">
                Founder & Owner
              </p>
              <p className="text-charcoal-light mb-6 leading-relaxed">
                With a passion for creating clean, comfortable spaces, Michelle
                founded Ms Red Bottoms Cleaning Solutions LLC in June 2025. Her
                vision was simple: bring premium, detail-oriented cleaning services
                to Altoona and surrounding areas, the kind of service she'd
                want in her own home.
              </p>
              <p className="text-charcoal-light mb-8 leading-relaxed">
                As a local business owner, Michelle is personally invested in every
                customer's satisfaction. She believes in building lasting
                relationships through consistent, trustworthy service.
              </p>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-[var(--red-accent)]/10 flex items-center justify-center">
                  <User className="w-8 h-8 text-[var(--red-accent)]" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal">Founded</p>
                  <p className="text-charcoal-light">June 5, 2025</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[var(--red-accent)]/20 to-[var(--red-accent)]/5">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <img
                    src="/michelle-hartman.jpg"
                    alt="Michelle Hartman"
                    className="w-2/3 h-2/3 object-cover rounded-2xl shadow-lg mb-6"
                  />
                  <p className="font-heading text-2xl font-semibold text-charcoal">
                    Michelle Hartman
                  </p>
                  <p className="text-charcoal-light">Founder & Owner</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
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
              Our <span className="text-[var(--red-accent)]">Mission</span>
            </h2>
            <p className="text-xl text-charcoal-light max-w-2xl mx-auto">
              To provide exceptional cleaning services that make homes and businesses
              shine, while building lasting relationships based on trust,
              reliability, and outstanding results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--red-accent)]/10 flex items-center justify-center mb-4">
                      <value.icon className="w-7 h-7 text-[var(--red-accent)]" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
                      {value.title}
                    </h3>
                    <p className="text-charcoal-light">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
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
              Why{" "}
              <span className="text-[var(--red-accent)]">Ms Red Bottoms</span>{" "}
              Stands Out
            </h2>
            <p className="text-xl text-charcoal-light max-w-2xl mx-auto">
              We don't just clean. We care. Here's what sets us apart from the rest.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Attention",
                description:
                  "As a sole proprietor, Michelle personally oversees every job. You get direct communication and consistent quality.",
              },
              {
                title: "Locally Owned",
                description:
                  "We're part of the Altoona community. We take pride in serving our neighbors and building lasting relationships.",
              },
              {
                title: "Quality Guaranteed",
                description:
                  "Your satisfaction is our promise. If you're not happy, we'll make it right. No questions asked.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg h-full bg-charcoal">
                  <CardContent className="pt-6">
                    <h3 className="font-heading text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">{item.description}</p>
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
              Ready to Experience the{" "}
              <span className="text-[var(--red-accent)]">Difference</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your cleaning needs. We'd love to hear from you.
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