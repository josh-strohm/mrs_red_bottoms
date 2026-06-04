"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, MapPin, ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const areas = [
  { name: "Altoona", type: "Primary" },
  { name: "Hollidaysburg", type: "Surrounding" },
  { name: "Duncansville", type: "Surrounding" },
  { name: "Tyrone", type: "Surrounding" },
  { name: "Bellwood", type: "Surrounding" },
  { name: "Roaring Spring", type: "Surrounding" },
  { name: "Gallitzin", type: "Surrounding" },
  { name: "Cresson", type: "Surrounding" },
  { name: "Portage", type: "Surrounding" },
  { name: "Ebensburg", type: "Extended" },
  { name: "Johnstown", type: "Extended" },
  { name: "State College", type: "Extended" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function ServiceAreasPage() {
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
                Service Areas
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-heading text-5xl md:text-6xl font-bold text-charcoal leading-tight mb-6"
            >
              Serving{" "}
              <span className="text-[var(--red-accent)]">Altoona</span> & Blair
              County
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-charcoal-light leading-relaxed"
            >
              Based in Altoona, we proudly serve homes and businesses throughout
              Blair County and surrounding areas. Contact us to discuss your
              project. We're happy to travel beyond our primary service area
              for the right job.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Primary Service Area */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Our <span className="text-[var(--red-accent)]">Service</span> Areas
            </h2>
            <p className="text-xl text-charcoal-light">
              We serve locations throughout Blair County and beyond
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {areas.map((area) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className={`border-none shadow-lg ${
                    area.type === "Primary"
                      ? "bg-[var(--red-accent)] text-white"
                      : area.type === "Surrounding"
                      ? "bg-gray-50"
                      : "bg-gray-50/50"
                  }`}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <MapPin
                        className={`w-5 h-5 ${
                          area.type === "Primary"
                            ? "text-white"
                            : "text-[var(--red-accent)]"
                        }`}
                      />
                      <div>
                        <p
                          className={`font-heading text-lg font-semibold ${
                            area.type === "Primary" ? "text-white" : "text-charcoal"
                          }`}
                        >
                          {area.name}
                        </p>
                        <p
                          className={`text-sm ${
                            area.type === "Primary"
                              ? "text-white/80"
                              : "text-charcoal-light"
                          }`}
                        >
                          {area.type === "Primary"
                            ? "Primary Service Area"
                            : area.type === "Surrounding"
                            ? "Blair County"
                            : "Extended Area"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-4">
                  Don't See Your Area?
                </h3>
                <p className="text-charcoal-light mb-6">
                  We may still be able to help! We regularly service properties
                  outside our primary areas. Contact us to discuss your specific
                  location and project.
                </p>
                <p className="text-charcoal-light">
                  We're always willing to travel for the right job, and we're
                  happy to discuss travel considerations for projects outside our
                  standard service area.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Link href="/quote">
                  <Button className="w-full bg-[var(--red-accent)] hover:bg-[var(--red-dark)] text-white text-lg py-6">
                    Get a Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full border-charcoal/20 text-charcoal text-lg py-6"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
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
              Find <span className="text-[var(--red-accent)]">Us</span>
            </h2>
            <p className="text-xl text-charcoal-light">
              Visit us at our location in Altoona
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-heading text-2xl font-bold text-charcoal mb-6">
                  Ms Red Bottoms Cleaning Solutions LLC
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[var(--red-accent)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-charcoal">Address</p>
                      <p className="text-charcoal-light">
                        625 Sharrar Dr
                        <br />
                        Altoona, PA 16602
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[var(--red-accent)] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-charcoal">Phone</p>
                      <a
                        href="tel:+18146564993"
                        className="text-charcoal-light hover:text-[var(--red-accent)]"
                      >
                        (814) 656-4993
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[var(--red-accent)] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-charcoal">Email</p>
                      <a
                        href="mailto:mrsredbottomscleaning@gmail.com"
                        className="text-charcoal-light hover:text-[var(--red-accent)]"
                      >
                        mrsredbottomscleaning@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-charcoal mb-4">Business Hours</h4>
                  <div className="space-y-2 text-charcoal-light">
                    <p className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 min-h-[400px] lg:min-h-auto flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-[var(--red-accent)]/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-10 h-10 text-[var(--red-accent)]" />
                  </div>
                  <p className="font-heading text-xl font-semibold text-charcoal">
                    Altoona, PA
                  </p>
                  <p className="text-charcoal-light">40.4316° N, 78.3940° W</p>
                </div>
              </div>
            </div>
          </motion.div>
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
              Ready to <span className="text-[var(--red-accent)]">Get Started</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free quote on your cleaning project.
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