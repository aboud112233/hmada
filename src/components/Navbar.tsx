"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Menu, X, Phone } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "الرئيسية", href: "#" },
  { name: "الخدمات", href: "#services" },
  { name: "المعرض", href: "#gallery" },
  { name: "الأسعار", href: "#pricing" },
  { name: "آراء العملاء", href: "#testimonials" },
  { name: "اتصل بنا", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-[#E5E7EB]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <Scissors className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-black text-gradient-primary">
              المزين
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#6B7280] hover:text-primary-500 rounded-lg hover:bg-primary-50/50 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+9647800000000"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#6B7280] hover:text-primary-500 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span dir="ltr">+964 780 000 0000</span>
            </a>
            <Link
              href="#booking"
              className="px-5 py-2.5 rounded-xl gradient-primary text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              احجز الآن
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-[#6B7280] hover:text-primary-500 hover:bg-primary-50 transition-all duration-200"
            aria-label="القائمة"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-[#E5E7EB] shadow-strong overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-1 mb-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-[#6B7280] hover:text-primary-500 rounded-xl hover:bg-primary-50/50 transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-3 pt-4 border-t border-[#E5E7EB]">
                <a
                  href="tel:+9647800000000"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-[#E5E7EB] text-[#6B7280] font-semibold text-sm hover:border-primary-200 hover:text-primary-500 transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">+964 780 000 0000</span>
                </a>
                <Link
                  href="#booking"
                  onClick={() => setIsOpen(false)}
                  className="block text-center px-4 py-3 rounded-xl gradient-primary text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200"
                >
                  احجز الآن
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
