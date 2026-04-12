import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Building2, Trash2, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive cleaning services in Altoona, PA including residential cleaning, commercial cleaning, clean-outs, and specialty deep cleaning.",
};

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description:
      "Transform your home into a sanctuary with our comprehensive residential cleaning services. We treat every home as if it were our own.",
    features: [
      "Routine recurring cleaning (weekly, bi-weekly, monthly)",
      "Deep cleaning for thorough attention",
      "Move-in/move-out cleaning",
      "Kitchen cleaning (appliances, cabinets, counters)",
      "Bathroom sanitization",
      "Dusting and vacuuming all rooms",
      "Floor care (hard floors & carpets)",
      "Window washing (interior)",
    ],
    link: "/quote",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description:
      "Create a productive, professional environment for your employees and customers with our expert commercial cleaning services.",
    features: [
      "Office cleaning (small & large)",
      "Retail space cleaning",
      "Common area maintenance",
      "Restroom sanitization",
      "Break room cleaning",
      "Floor care and maintenance",
      "Flexible scheduling (before/after hours)",
      "One-time or recurring contracts",
    ],
    link: "/quote",
  },
  {
    icon: Trash2,
    title: "Clean-Outs",
    description:
      "Whether you're transitioning to a new home, handling an estate, or clearing a property, we handle the heavy lifting so you don't have to.",
    features: [
      "Move-in/move-out clean-outs",
      "Estate clean-outs",
      "Foreclosure clean-outs",
      "Hoarding situation cleanup",
      "Garage clean-outs",
      "Basement clean-outs",
      "Attic and storage clean-outs",
      "Property preparation for sale/rental",
    ],
    link: "/quote",
  },
  {
    icon: Sparkles,
    title: "Specialty & Deep Cleaning",
    description:
      "For projects that require extra attention and specialized techniques, our deep cleaning and specialty services deliver exceptional results.",
    features: [
      "Post-construction cleaning",
      "Seasonal deep cleaning",
      "One-time deep cleans",
      "Tile and grout cleaning",
      "Upholstery cleaning coordination",
      "Airbnb/vacation rental turnover",
      "Event cleanup (before/after)",
      "Organization assistance",
    ],
    link: "/quote",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#F5F5F5] via-white to-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-semibold text-[#1A1A1A] leading-tight mb-6">
              Our Cleaning Services
            </h1>
            <p className="text-xl text-[#4A4A4A] leading-relaxed">
              From routine maintenance to complete property transformations, we offer 
              comprehensive cleaning solutions tailored to your needs. Every service is 
              delivered with the attention to detail and professionalism that defines 
              Ms Red Bottoms.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Icon Section */}
                    <div className="lg:col-span-4 bg-gradient-to-br from-[#1A1A1A] to-[#4A4A4A] p-12 flex flex-col justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-[#C41E3A] flex items-center justify-center mb-6">
                        <service.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="font-heading text-3xl font-semibold text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features Section */}
                    <div className="lg:col-span-8 p-12">
                      <h4 className="font-semibold text-[#1A1A1A] mb-6 text-lg">
                        What's Included:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#C41E3A] shrink-0 mt-0.5" />
                            <span className="text-[#4A4A4A]">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link href={service.link}>
                        <Button className="bg-[#C41E3A] hover:bg-[#A01830] text-white font-medium">
                          Request Quote for {service.title}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-6">
              How It Works
            </h2>
            <p className="text-lg text-[#4A4A4A]">
              Getting started is simple. Our process is designed to make your experience 
              seamless from the first call to the final result.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#C41E3A] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#1A1A1A] mb-3">
                Contact Us
              </h3>
              <p className="text-[#4A4A4A] text-sm">
                Reach out for a free consultation. Tell us about your space and needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#C41E3A] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#1A1A1A] mb-3">
                Get a Quote
              </h3>
              <p className="text-[#4A4A4A] text-sm">
                We provide a detailed, transparent quote with no hidden fees.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#C41E3A] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#1A1A1A] mb-3">
                We Clean
              </h3>
              <p className="text-[#4A4A4A] text-sm">
                Our professional team arrives on time and delivers exceptional results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#C41E3A] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#1A1A1A] mb-3">
                You Relax
              </h3>
              <p className="text-[#4A4A4A] text-sm">
                Enjoy your clean space. We're not done until you're satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-6">
            Ready to Book Your Cleaning?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Get in touch today for a free quote. We'd love to help you experience 
            the Ms Red Bottoms difference.
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