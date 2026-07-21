"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronDown, Scissors } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* خلفية ناعمة جداً */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary-50/60 to-transparent rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary-50/40 to-transparent rounded-full translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* شعار */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full bg-primary-50 border border-primary-100"
          >
            <Scissors className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-semibold text-primary-600 tracking-wide">صالون حلاقة رجالي فاخر</span>
          </motion.div>

          {/* العنوان الرئيسي */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#111827] mb-6 leading-[1.1] tracking-tight"
          >
            <span className="text-gradient-primary">المزين</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#6B7280]">
              لأناقتك تستحق الأفضل
            </span>
          </motion.h1>

          {/* الوصف */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-lg sm:text-xl text-[#6B7280] max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            خبرة أكثر من 15 عامًا في عالم الحلاقة والعناية بالرجال، نقدم لك أحدث الصيحات وأعلى معايير الجودة
          </motion.p>

          {/* الأزرار */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#booking"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-primary text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-5 h-5" />
              احجز الآن
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-[#E5E7EB] text-[#111827] font-bold text-lg hover:border-primary-200 hover:bg-primary-50/50 transition-all duration-200"
            >
              <ChevronDown className="w-5 h-5" />
              استعرض الخدمات
            </Link>
          </motion.div>

          {/* إحصائيات */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-3xl mx-auto"
          >
            {[
              { number: "15+", label: "سنوات خبرة" },
              { number: "10K+", label: "عميل سعيد" },
              { number: "50+", label: "خدمة متنوعة" },
              { number: "4.9", label: "تقييم العملاء" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-gradient-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-[#6B7280] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
