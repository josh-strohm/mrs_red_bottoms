import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
  { href: "/quote", label: "Get a Quote" },
];

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#C41E3A] flex items-center justify-center">
                <span className="text-white font-serif text-lg">R</span>
              </div>
              <div>
                <span className="font-serif text-xl font-semibold block">
                  Mrs. Red Bottoms
                </span>
                <span className="text-xs text-gray-400">
                  Cleaning Solutions LLC
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium cleaning services for homes and businesses in Altoona, PA
              and surrounding areas. Locally owned, professionally managed.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="px-4 py-2 rounded-full bg-[#2A2A2A] flex items-center justify-center hover:bg-[#C41E3A] transition-colors text-sm text-gray-300 hover:text-white"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href="#"
                className="px-4 py-2 rounded-full bg-[#2A2A2A] flex items-center justify-center hover:bg-[#C41E3A] transition-colors text-sm text-gray-300 hover:text-white"
                aria-label="Instagram"
              >
                IG
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#C41E3A] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C41E3A] shrink-0 mt-0.5" size={18} />
                <span className="text-gray-400 text-sm">
                  705 Lincoln Manor<br />
                  Altoona, PA 16602
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C41E3A] shrink-0" size={18} />
                <span className="text-gray-400 text-sm">814-656-4993</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C41E3A] shrink-0" size={18} />
                <span className="text-gray-400 text-sm">redbottomscleaning@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Business Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C41E3A] shrink-0 mt-0.5" size={18} />
                <div className="text-gray-400 text-sm">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2A2A2A] pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Mrs. Red Bottoms Cleaning Solutions LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}