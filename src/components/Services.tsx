"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Sparkles, Droplets, Palette, Star } from "lucide-react";

const services = [
  {
    id: 1,
    title: "قص شعر",
    description: "قص شعر احترافي بأحدث الصيحات العالمية مع العناية بفروة الرأس",
    price: "15,000 د.ع",
    icon: Scissors,
    features: ["غسل شعر", "تدليك فروة رأس", "تصفيف", "منتجات عناية"],
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 2,
    title: "حلاقة لحية",
    description: "تشذيب وتصفيف اللحية بأحدث التقنيات للحصول على إطلالة مثالية",
    price: "10,000 د.ع",
    icon: Sparkles,
    features: ["تشذيب دقيق", "ترطيب", "زيوت طبيعية", "مشورة تصفيف"],
    color: "from-violet-500 to-violet-600",
  },
  {
    id: 3,
    title: "تنظيف بشرة",
    description: "جلسات عناية بالبشرة للرجال باستخدام أفضل المنتجات الطبيعية",
    price: "20,000 د.ع",
    icon: Droplets,
    features: ["تنظيف عميق", "تقشير", "ماسكات طبيعية", "ترطيب"],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    id: 4,
    title: "صبغات",
    description: "أحدث صيحات الصبغات العالمية بألوان طبيعية وجودة عالية",
    price: "25,000 د.ع",
    icon: Palette,
    features: ["ألوان طبيعية", "عناية بالشعر", "منتجات أوروبية", "استشارة لون"],
    color: "from-fuchsia-500 to-fuchsia-600",
  },
  {
    id: 5,
    title: "خدمات إضافية",
    description: "مجموعة متكاملة من الخدمات التكميلية للعناية الكاملة",
    price: "يبدأ من 5,000 د.ع",
    icon: Star,
    features: ["حمام بخار", "مساج", "عناية بالأظافر", "مشورة جمالية"],
    color: "from-purple-500 to-pink-500",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const IconComponent = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      className="group relative bg-white rounded-[18px] overflow-hidden shadow-soft hover:shadow-medium transition-all duration-200 border border-[#E5E7EB] hover:border-primary-200"
    >
      {/* Top gradient line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />

      {/* Icon */}
      <div className="pt-8 pb-4 px-8">
        <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-500 group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-primary-400 group-hover:text-white transition-all duration-200">
          <IconComponent className="w-7 h-7" />
        </div>
      </div>

      {/* Content */}
      <div className="px-8 pb-8">
        <h3 className="text-xl font-bold text-[#111827] mb-2 group-hover:text-primary-600 transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-[#6B7280] text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.features.map((feature, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-xs font-medium bg-[#F8FAFC] text-[#6B7280] rounded-lg border border-[#E5E7EB]"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="pt-4 border-t border-[#E5E7EB]">
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-bold text-gradient-primary">{service.price}</span>
          </div>
        </div>
      </div>

      {/* Hover subtle glow */}
      <div className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ring-1 ring-primary-200/50" />
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 bg-[#F8FAFC] overflow-hidden">
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
            <Scissors className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-semibold text-primary-600">خدماتنا</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">
            خدمات <span className="text-gradient-primary">المزين</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            نقدم لكم أفضل خدمات الحلاقة والعناية بالرجال بأعلى معايير الجودة والاحترافية
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
