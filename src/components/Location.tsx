"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const infoCards = [
    {
      icon: MapPin,
      title: "العنوان",
      details: ["العراق - ذي قار - الشطرة - الشعلة", "قرب سوق الشعلة التجاري"],
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      details: [
        { label: "السبت - الخميس", time: "9:00 ص - 11:00 م" },
        { label: "الجمعة", time: "2:00 م - 11:00 م" },
      ],
    },
    {
      icon: Phone,
      title: "اتصل بنا",
      details: [
        { label: "هاتف", value: "+964 780 000 0000", href: "tel:+9647800000000" },
        { label: "بريد", value: "info@almuzayen.com", href: "mailto:info@almuzayen.com" },
      ],
    },
  ];

  return (
    <section id="location" className="relative py-24 bg-[#F8FAFC] overflow-hidden">
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
            <MapPin className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-semibold text-primary-600">موقعنا</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">
            زورونا في <span className="text-gradient-primary">المزين</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            نحن في انتظاركم في صالوننا المميز
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="relative group"
          >
            <div className="relative rounded-[18px] overflow-hidden shadow-soft h-[400px] lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.845232160223!2d46.1626672!3d31.3859345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2e4b4e4b4e4b4b%3A0x4e4b4e4b4e4b4e4b!2z2KfZhNi52KfYqSDZhdmG2KfYr9mK2Kk!5e0!3m2!1sar!2siq!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full rounded-[18px]"
                title="موقع صالون المزين"
              />
            </div>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {infoCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-[18px] p-6 shadow-soft hover:shadow-medium transition-all duration-200 border border-[#E5E7EB] group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-500 group-hover:gradient-primary group-hover:text-white transition-all duration-200">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#111827] mb-3">{card.title}</h3>
                    <div className="space-y-2">
                      {card.details.map((detail: any, i: number) => {
                        if (typeof detail === "string") {
                          return (
                            <p key={i} className="text-[#6B7280] text-sm">{detail}</p>
                          );
                        }
                        if (detail.href) {
                          return (
                            <a
                              key={i}
                              href={detail.href}
                              className="flex items-center gap-2 text-[#6B7280] hover:text-primary-500 text-sm transition-colors duration-200"
                            >
                              <span>{detail.label}:</span>
                              <span dir="ltr" className="font-medium">{detail.value}</span>
                            </a>
                          );
                        }
                        return (
                          <div key={i} className="flex justify-between items-center text-sm">
                            <span className="text-[#6B7280]">{detail.label}</span>
                            <span className="text-[#111827] font-medium">{detail.time}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
