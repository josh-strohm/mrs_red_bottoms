import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Heart, Star, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ms Red Bottoms Cleaning Solutions LLC, founded by Michelle Hartman in Altoona, PA. Discover our mission to provide premium cleaning services to the local community.",
};

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description:
      "We show up when we say we will, every single time. You can count on us to deliver consistent, dependable service.",
  },
  {
    icon: Target,
    title: "Attention to Detail",
    description:
      "We don't just clean — we transform. Every corner, every surface gets the care it deserves.",
  },
  {
    icon: Heart,
    title: "Customer-First",
    description:
      "Your satisfaction is our measure of success. We listen, adapt, and go the extra mile.",
  },
];

const whyDifferent = [
  "Locally owned and operated — not a franchise",
  "Fully insured for your peace of mind",
  "Consistent team members who know your space",
  "Customized cleaning plans for every client",
  "Transparent pricing with no hidden fees",
  "Environmentally conscious cleaning options",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#F5F5F5] via-white to-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C41E3A]/10 px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 bg-[#C41E3A] rounded-full" />
                <span className="text-[#C41E3A] text-sm font-medium">
                  Founded June 2025
                </span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-semibold text-[#1A1A1A] leading-tight mb-6">
                Our Story
              </h1>
              <p className="text-xl text-[#4A4A4A] leading-relaxed mb-8">
                Ms Red Bottoms Cleaning Solutions LLC was born from a simple belief: 
                everyone deserves to come home or walk into a workplace that feels fresh, 
                clean, and cared for.
              </p>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
                Founded by <strong>Michelle Hartman</strong> in June 2025, our company 
                brings together professional management experience with a genuine passion 
                for creating clean, healthy environments. As a sole proprietor based in 
                Altoona, PA, Michelle personally oversees every aspect of operations — 
                from client consultations to the final walk-through.
              </p>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                We aren't just another cleaning company. We're your neighbors, invested 
                in making our local community a better place, one spotless space at a time.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-[#1A1A1A] to-[#4A4A4A] rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-[#C41E3A] flex items-center justify-center mx-auto mb-6">
                    <span className="font-heading text-5xl text-white">M</span>
                  </div>
                  <p className="text-white/80 text-lg">Michelle Hartman</p>
                  <p className="text-white/60 text-sm mt-2">Founder & Owner</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-[#C41E3A]" />
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">100%</p>
                    <p className="text-sm text-[#4A4A4A]">Satisfaction Guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-[#4A4A4A] leading-relaxed mb-8">
              To provide premium cleaning services that exceed expectations while 
              building lasting relationships with our clients. We strive to be 
              the benchmark for quality, reliability, and professionalism in the 
              cleaning industry across Blair County and beyond.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {values.map((value) => (
                <Card
                  key={value.title}
                  className="border-0 shadow-lg bg-[#F5F5F5]"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#C41E3A]/10 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-[#C41E3A]" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-[#1A1A1A] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-6">
                Why We're Different
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
                In an industry full of options, we stand apart through our commitment 
                to excellence and our personal touch. Here's what sets us apart:
              </p>
              <ul className="space-y-4">
                {whyDifferent.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C41E3A] shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#4A4A4A] rounded-2xl p-12 text-center">
              <p className="text-white/80 text-2xl font-heading leading-relaxed mb-6">
                "We're not just cleaning your space — we're caring for it as if it were our own."
              </p>
              <p className="text-white/60">— Michelle Hartman, Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-6">
            Want to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            We'd love to hear from you. Get in touch today to discuss how we can 
            help keep your space clean and beautiful.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/quote">
              <Button className="bg-[#C41E3A] hover:bg-[#A01830] text-white font-medium px-8 py-6 text-lg">
                Get a Free Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1A1A1A] font-medium px-8 py-6 text-lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}