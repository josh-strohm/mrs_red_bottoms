"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#C41E3A] flex items-center justify-center">
              <span className="text-white font-serif text-lg">R</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-xl font-semibold text-[#1A1A1A]">
                Mrs. Red Bottoms
              </span>
              <span className="hidden lg:inline text-xs text-[#4A4A4A] ml-2">
                Cleaning Solutions LLC
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#C41E3A] ${
                  pathname === link.href
                    ? "text-[#C41E3A]"
                    : "text-[#4A4A4A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/quote">
              <Button className="bg-[#C41E3A] hover:bg-[#A01830] text-white font-medium px-6">
                Get Free Quote
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-[#4A4A4A]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col py-4 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 text-base font-medium transition-colors hover:text-[#C41E3A] ${
                  pathname === link.href
                    ? "text-[#C41E3A]"
                    : "text-[#4A4A4A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4">
              <Link href="/quote" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-[#C41E3A] hover:bg-[#A01830] text-white font-medium">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}