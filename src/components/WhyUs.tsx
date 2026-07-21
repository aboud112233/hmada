"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Star, Shield, Clock, Award, Heart } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "خبرة 15+ عاماً",
    description: "فريق من أمهر الحلاقين المحترفين ذوي الخبرة الطويلة في عالم الحلاقة",
  },
  {
    icon: Star,
    title: "جودة عالية",
    description: "نستخدم أفضل المنتجات العالمية لنضمن لك إطلالة مثالية تدوم طويلاً",
  },
  {
    icon: Shield,
    title: "نظافة وتعقيم",
    description: "نلتزم بأعلى معايير النظافة والتعقيم لضمان سلامتك وراحتك",
  },
  {
    icon: Clock,
    title: "خدمة سريعة",
    description: "نحترم وقتك ونضمن لك خدمة سريعة دون التضحية بالجودة",
  },
  {
    icon: Heart,
    title: "عناية شخصية",
    description: "نهتم بكل تفصيلة صغيرة لنمنحك تجربة فريدة تناسب ذوقك الشخصي",
  },
  {
    icon: Scissors,
    title: "أحدث الصيحات",
    description: "نواكب أحدث صيحات الحلاقة العالمية لنقدم لك أحدث القصات والتسريحات",
  },
];

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-4">
            <Award className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-semibold text-primary-600">لماذا تختارنا</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">
            لماذا <span className="text-gradient-primary">المزين</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            نضع معايير الجودة والاحترافية في مقدمة أولوياتنا لنضمن لك تجربة فريدة
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="group relative bg-white rounded-[18px] p-8 shadow-soft hover:shadow-medium transition-all duration-200 border border-[#E5E7EB] hover:border-primary-200"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-500 group-hover:gradient-primary group-hover:text-white transition-all duration-200 mb-5">
                <reason.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-[#111827] mb-2 group-hover:text-primary-600 transition-colors duration-200">
                {reason.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {reason.description}
              </p>

              {/* Hover subtle glow */}
              <div className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ring-1 ring-primary-200/50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
