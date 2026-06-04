"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[var(--red-accent)] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading text-xl font-semibold text-charcoal">
              Ms Red Bottoms
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative",
                  pathname === link.href
                    ? "text-[var(--red-accent)]"
                    : "text-charcoal-light hover:text-charcoal"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--red-accent)]"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/quote">
              <Button className="bg-[var(--red-accent)] hover:bg-[var(--red-dark)] text-white font-medium px-6">
                Get Free Quote
              </Button>
            </Link>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <Button 
              variant="ghost" 
              size="icon" 
              aria-label="Menu"
              className="md:hidden"
              onClick={() => setOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </Button>
            <SheetContent side="right" className="w-full max-w-sm">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-6">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setOpen(false)}
                  >
                    <div className="w-10 h-10 rounded-full bg-[var(--red-accent)] flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-heading text-xl font-semibold">
                      Ms Red Bottoms
                    </span>
                  </Link>
                  <Button variant="ghost" size="icon" aria-label="Close" onClick={() => setOpen(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <nav className="flex flex-col gap-4 py-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "text-lg font-medium py-3 px-4 rounded-lg transition-colors",
                        pathname === link.href
                          ? "bg-[var(--red-accent)]/10 text-[var(--red-accent)]"
                          : "text-charcoal hover:bg-gray-50"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pb-8">
                  <Link href="/quote" onClick={() => setOpen(false)}>
                    <Button className="w-full bg-[var(--red-accent)] hover:bg-[var(--red-dark)] text-white font-medium">
                      Get Free Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}