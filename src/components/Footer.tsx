"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const quickLinks = [
    { name: "الرئيسية", href: "#" },
    { name: "الخدمات", href: "#services" },
    { name: "المعرض", href: "#gallery" },
    { name: "الأسعار", href: "#pricing" },
    { name: "آراء العملاء", href: "#testimonials" },
    { name: "موقعنا", href: "#location" },
    { name: "احجز موعد", href: "#booking" },
  ];

  const socialLinks = [
    {
      name: "فيسبوك",
      href: "#",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
    },
    {
      name: "إنستغرام",
      href: "#",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.11 2.525c.636-.247 1.363-.416 2.427-.465C8.83 2.013 9.185 2 11.615 2h.7zm-.08 1.802h-.47c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.47c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
        </svg>
      ),
    },
    {
      name: "تويتر",
      href: "#",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <footer id="contact" className="relative bg-white border-t border-[#E5E7EB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Scissors className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black text-gradient-primary">المزين</span>
            </div>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
              صالون حلاقة رجالي فاخر في العراق - الشطرة. نقدم أفضل خدمات الحلاقة والعناية بالرجال منذ أكثر من 15 عاماً.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:gradient-primary hover:text-white hover:border-transparent transition-all duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#111827] font-bold text-lg mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#6B7280] hover:text-primary-500 transition-colors duration-200 text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D1D5DB] group-hover:bg-primary-500" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-[#111827] font-bold text-lg mb-6">أوقات العمل</h4>
            <ul className="space-y-3">
              <li className="flex justify-between items-center py-2 border-b border-[#E5E7EB]">
                <span className="text-[#6B7280] text-sm">السبت - الخميس</span>
                <span className="text-[#111827] font-semibold text-sm">9ص - 11م</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-[#E5E7EB]">
                <span className="text-[#6B7280] text-sm">الجمعة</span>
                <span className="text-[#111827] font-semibold text-sm">2م - 11م</span>
              </li>
              <li className="pt-2">
                <span className="text-primary-500 text-sm font-semibold">نحن في خدمتك دائماً</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#111827] font-bold text-lg mb-6">معلومات التواصل</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+9647800000000"
                  className="flex items-center gap-3 text-[#6B7280] hover:text-primary-500 transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center group-hover:gradient-primary group-hover:text-white group-hover:border-transparent transition-all duration-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span dir="ltr" className="text-sm">+964 780 000 0000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@almuzayen.com"
                  className="flex items-center gap-3 text-[#6B7280] hover:text-primary-500 transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center group-hover:gradient-primary group-hover:text-white group-hover:border-transparent transition-all duration-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">info@almuzayen.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-[#6B7280]">
                  <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm">العراق - الشطرة - الشعلة</span>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mt-12 pt-8 border-t border-[#E5E7EB]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#9CA3AF] text-sm">
              © {new Date().getFullYear()} جميع الحقوق محفوظة لـ <span className="text-primary-500 font-semibold">المزين</span>
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#9CA3AF] hover:text-primary-500 text-sm transition-colors duration-200">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-[#9CA3AF] hover:text-primary-500 text-sm transition-colors duration-200">
                الشروط والأحكام
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#9CA3AF] text-xs">صمم بــ</span>
              <span className="text-red-500">❤</span>
              <span className="text-primary-500 text-sm font-semibold">المزين</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
