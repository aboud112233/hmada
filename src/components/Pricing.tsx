"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Tag } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    id: 1,
    name: "قص شعر",
    price: "15,000",
    description: "خدمة قص شعر احترافية كاملة",
    features: [
      "غسل شعر بالشامبو",
      "قص الشعر حسب الطلب",
      "تصفيف نهائي",
      "منتجات عناية",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "حلاقة كاملة",
    price: "25,000",
    description: "حلاقة شعر ولحية كاملة مع العناية",
    features: [
      "قص شعر احترافي",
      "تهذيب لحية",
      "غسل وترطيب",
      "تدليك فروة رأس",
      "منتجات عناية فاخرة",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "عناية كاملة",
    price: "40,000",
    description: "باقة العناية الشاملة للرجال",
    features: [
      "قص شعر + لحية",
      "تنظيف بشرة عميق",
      "ماسك طبيعي للوجه",
      "حمام بخار",
      "مساج استرخائي",
      "مشورة جمالية",
    ],
    popular: false,
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="relative py-24 bg-[#F8FAFC] overflow-hidden">
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
            <Tag className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-semibold text-primary-600">الباقات والأسعار</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">
            باقات <span className="text-gradient-primary">المزين</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            اختر الباقة المناسبة لك واستمتع بتجربة فاخرة
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className={`relative bg-white rounded-[18px] overflow-hidden transition-all duration-200 ${
                plan.popular
                  ? "shadow-strong ring-2 ring-primary-500 scale-105 md:scale-105"
                  : "shadow-soft hover:shadow-medium border border-[#E5E7EB]"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 gradient-primary py-2 text-center">
                  <span className="text-white text-sm font-bold tracking-wide">الأكثر طلباً</span>
                </div>
              )}

              <div className={`p-8 ${plan.popular ? "pt-14" : ""}`}>
                {/* Plan name */}
                <h3 className="text-xl font-bold text-[#111827] mb-1">{plan.name}</h3>
                <p className="text-[#6B7280] text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-4xl sm:text-5xl font-black text-gradient-primary">{plan.price}</span>
                  <span className="text-[#6B7280] text-sm mr-1">د.ع</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#111827]">
                      <div className="w-6 h-6 rounded-full bg-[#22C55E]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#22C55E]" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Link
                  href="#booking"
                  className={`block w-full text-center py-3.5 rounded-xl font-bold text-base transition-all duration-200 ${
                    plan.popular
                      ? "gradient-primary text-white shadow-lg hover:shadow-xl"
                      : "border-2 border-[#E5E7EB] text-[#111827] hover:border-primary-200 hover:bg-primary-50/50"
                  }`}
                >
                  احجز الآن
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
