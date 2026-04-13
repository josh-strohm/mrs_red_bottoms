import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Mrs Red Bottoms Cleaning Solutions LLC serves Altoona, PA and surrounding Blair County communities including Hollidaysburg, Duncansville, Tyrone, and more.",
};

const serviceAreas = [
  { name: "Altoona", description: "Primary Service Area" },
  { name: "Hollidaysburg", description: "10 minutes south" },
  { name: "Duncansville", description: "15 minutes east" },
  { name: "Tyrone", description: "20 minutes east" },
  { name: "Bellwood", description: "15 minutes northeast" },
  { name: "Roaring Spring", description: "20 minutes southwest" },
  { name: "Claysburg", description: "25 minutes southeast" },
  { name: "Gallitzin", description: "15 minutes north" },
  { name: "Cresson", description: "20 minutes north" },
  { name: "Williamsburg", description: "30 minutes south" },
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#F5F5F5] via-white to-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-semibold text-[#1A1A1A] leading-tight mb-6">
              Service Areas
            </h1>
            <p className="text-xl text-[#4A4A4A] leading-relaxed">
              Proudly serving Altoona and the surrounding Blair County communities. 
              We're your local cleaning experts, committed to bringing premium services 
              to our neighbors across the region.
            </p>
          </div>
        </div>
      </section>

      {/* Map & Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="order-2 lg:order-1">
              <div className="bg-[#F5F5F5] rounded-2xl overflow-hidden h-[400px] lg:h-full min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48228.93522457744!2d-78.4100537240894!3d40.51867497156168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cb85fc8f52fbe5%3A0x3b41a2b1f82e2f1e!2sAltoona%2C%20PA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Altoona, PA Service Area Map"
                />
              </div>
            </div>

            {/* Areas List */}
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-3xl font-semibold text-[#1A1A1A] mb-8">
                Areas We Serve
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {serviceAreas.map((area) => (
                  <Card
                    key={area.name}
                    className="border border-gray-200 hover:border-[#C41E3A] transition-colors"
                  >
                    <CardContent className="p-4 flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-[#C41E3A] shrink-0" />
                      <div>
                        <p className="font-semibold text-[#1A1A1A]">{area.name}</p>
                        <p className="text-sm text-[#4A4A4A]">{area.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-[#F5F5F5] rounded-xl">
                <h3 className="font-heading text-xl font-semibold text-[#1A1A1A] mb-3">
                  Don't See Your Area?
                </h3>
                <p className="text-[#4A4A4A] mb-4">
                  We may still be able to serve you! Contact us to discuss your 
                  location and we'll work with you to find a solution.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="border-[#C41E3A] text-[#C41E3A] hover:bg-[#C41E3A] hover:text-white">
                    Contact Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-[#C41E3A] flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="font-heading text-3xl font-semibold text-[#1A1A1A] mb-4">
                    Visit Our Office
                  </h2>
                  <p className="text-[#4A4A4A]">
                    We're located in Altoona and always happy to meet with prospective 
                    clients in person.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#C41E3A] shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-[#1A1A1A]">Address</p>
                      <p className="text-[#4A4A4A]">
                        705 Lincoln Manor<br />
                        Altoona, PA 16602
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#C41E3A] shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-[#1A1A1A]">Phone</p>
                      <p className="text-[#4A4A4A]">814-656-4993</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#C41E3A] shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-[#1A1A1A]">Email</p>
                      <p className="text-[#4A4A4A]">redbottomscleaning@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#C41E3A] shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-[#1A1A1A]">Hours</p>
                      <p className="text-[#4A4A4A]">
                        Mon-Fri: 8AM - 6PM<br />
                        Sat: 9AM - 4PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
            Whether you're in Altoona or a surrounding area, we'd love to hear from you.
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