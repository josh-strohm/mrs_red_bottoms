import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Clock, Heart, Home, Building2, Trash2, Sparkles } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description:
      "Routine cleaning, deep cleaning, and move-in/move-out services for homes, apartments, and condos.",
    link: "/services",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description:
      "Professional cleaning for offices, retail spaces, and common areas. Flexible scheduling to minimize disruption.",
    link: "/services",
  },
  {
    icon: Trash2,
    title: "Clean-Outs",
    description:
      "Estate clean-outs, foreclosure clean-outs, hoarding situations, and garage/basement clean-outs.",
    link: "/services",
  },
  {
    icon: Sparkles,
    title: "Specialty & Deep Cleaning",
    description:
      "Post-construction cleaning, seasonal deep cleans, and one-time projects requiring extra attention.",
    link: "/services",
  },
];

const trustSignals = [
  {
    icon: Shield,
    title: "Fully Insured",
    description:
      "Every job is covered. You can trust us in your home or business with complete peace of mind.",
  },
  {
    icon: Award,
    title: "Satisfaction Guaranteed",
    description:
      "We don't consider a job done until you're completely satisfied. Your happiness is our priority.",
  },
  {
    icon: Clock,
    title: "Reliable & Punctual",
    description:
      "We show up when we say we will. Count on us for consistent, dependable service every time.",
  },
  {
    icon: Heart,
    title: "Locally Owned",
    description:
      "Proudly serving Altoona and the surrounding Blair County community since 2025.",
  },
];

const testimonials = [
  {
    quote:
      "Mrs Red Bottoms transformed our home! The attention to detail was incredible. I've never seen our kitchen shine like this.",
    name: "Sarah M.",
    location: "Altoona, PA",
  },
  {
    quote:
      "We use them for our office cleaning every week. Professional, thorough, and always on time. Highly recommend!",
    name: "James R.",
    location: "Hollidaysburg, PA",
  },
  {
    quote:
      "They handled a complete estate clean-out for us with such care and respect. Made a difficult time so much easier.",
    name: "Linda K.",
    location: "Duncansville, PA",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#F5F5F5] via-white to-[#F5F5F5] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(196,30,58,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(26,26,26,0.02),transparent_40%)]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C41E3A]/10 px-4 py-2 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-[#C41E3A] rounded-full animate-pulse" />
              <span className="text-[#C41E3A] text-sm font-medium">
                Locally Owned & Operated in Altoona, PA
              </span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1A1A1A] leading-tight mb-6 animate-fade-in-up">
              Cleaning That{" "}
              <span className="text-[#C41E3A]">Sets the</span> Standard
            </h1>
            
            <p className="text-xl text-[#4A4A4A] leading-relaxed mb-10 max-w-2xl animate-fade-in-up animation-delay-200">
              Premium residential and commercial cleaning services tailored to your needs. 
              From routine maintenance to complete property transformations — experience 
              the difference that true professionalism makes.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
              <Link href="/quote">
                <Button
                  size="lg"
                  className="bg-[#C41E3A] hover:bg-[#A01830] text-white font-medium px-8 py-6 text-lg"
                >
                  Get a Free Quote
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white font-medium px-8 py-6 text-lg"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-gradient-to-l from-gray-100 to-transparent opacity-50" />
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-6">
              Why Choose Mrs Red Bottoms?
            </h2>
            <p className="text-lg text-[#4A4A4A]">
              We believe cleaning isn't just about making spaces look good — it's about 
              creating environments where you can live and work with pride.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((signal) => (
              <Card
                key={signal.title}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#C41E3A]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C41E3A] transition-colors">
                    <signal.icon className="w-8 h-8 text-[#C41E3A] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[#1A1A1A] mb-3">
                    {signal.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">
                    {signal.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-6">
              Our Cleaning Services
            </h2>
            <p className="text-lg text-[#4A4A4A]">
              Comprehensive cleaning solutions for every type of space. 
              Whether it's your home, office, or a property in transition — we've got you covered.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-gradient-to-br from-[#1A1A1A] to-[#4A4A4A] p-8 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-[#C41E3A]/20 transition-colors">
                        <service.icon className="w-10 h-10 text-white group-hover:text-[#C41E3A] transition-colors" />
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <h3 className="font-heading text-2xl font-semibold text-[#1A1A1A] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-[#4A4A4A] mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <Link
                        href={service.link}
                        className="inline-flex items-center text-[#C41E3A] font-medium hover:underline"
                      >
                        Learn more →
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                variant="outline"
                className="border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white font-medium px-8"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-[#4A4A4A]">
              Don't just take our word for it. Here's what homeowners and business 
              owners in our community have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-[#F5F5F5] hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-[#C41E3A]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#4A4A4A] mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">{testimonial.name}</p>
                    <p className="text-sm text-[#4A4A4A]">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(196,30,58,0.1),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Get in touch today for a free, no-obligation quote. We'd love to show you 
            what premium cleaning looks like.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-[#C41E3A] hover:bg-[#A01830] text-white font-medium px-8 py-6 text-lg"
              >
                Get Your Free Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
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