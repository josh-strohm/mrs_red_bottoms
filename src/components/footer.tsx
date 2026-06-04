import Link from "next/link";
import { Sparkles, MapPin, Phone, Mail } from "lucide-react";

const currentYear = new Date().getFullYear();

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
  { href: "/quote", label: "Get a Quote" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[var(--red-accent)] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading text-xl font-semibold">
                Ms Red Bottoms Cleaning Solutions LLC
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Premium cleaning services for homes and businesses in Altoona, PA
              and surrounding areas. Locally owned and operated, committed to
              excellence in every clean.
            </p>
            <div className="flex gap-4">
              <span className="text-gray-400 text-sm">Follow us on social media</span>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--red-accent)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  625 Sharrar Dr
                  <br />
                  Altoona, PA 16602
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--red-accent)] flex-shrink-0" />
                <a
                  href="tel:+18146564993"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  (814) 656-4993
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--red-accent)] flex-shrink-0" />
                <a
                  href="mailto:info@msredbottomscleaning.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@msredbottomscleaning.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {currentYear} Ms Red Bottoms Cleaning Solutions LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}