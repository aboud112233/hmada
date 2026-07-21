"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Package, ShoppingBag, Check, X } from "lucide-react";

const defaultProducts = [
  {
    id: 1,
    name: "شامبو احترافي",
    description: "شامبو لتغذية وتقوية الشعر بخلاصة الأعشاب الطبيعية",
    price: "15,000 د.ع",
    image: "🧴",
    status: "available" as const,
  },
  {
    id: 2,
    name: "زيت شعر طبيعي",
    description: "زيت طبيعي لتطويل وتكثيف الشعر بخلاصة الزيوت العطرية",
    price: "12,000 د.ع",
    image: "🫒",
    status: "available" as const,
  },
  {
    id: 3,
    name: "جل تصفيف شعر",
    description: "جل قوي التثبيت للشعر يدوم طوال اليوم",
    price: "8,000 د.ع",
    image: "💈",
    status: "available" as const,
  },
  {
    id: 4,
    name: "كريم لحية",
    description: "كريم مرطب ومنعم للحية لاطلالة مثالية",
    price: "10,000 د.ع",
    image: "🧔",
    status: "available" as const,
  },
  {
    id: 5,
    name: "ماسك للوجه",
    description: "ماسك طبيعي لتنظيف وتفتيح البشرة",
    price: "7,000 د.ع",
    image: "✨",
    status: "unavailable" as const,
  },
  {
    id: 6,
    name: "سبراي شعر",
    description: "سبراي تثبيت نهائي يدوم طويلاً",
    price: "9,000 د.ع",
    image: "💨",
    status: "available" as const,
  },
];

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const availableProducts = defaultProducts.filter((p) => p.status === "available");

  return (
    <section id="products" className="relative py-24 bg-[#F8FAFC] overflow-hidden">
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
            <ShoppingBag className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-semibold text-primary-600">منتجاتنا</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">
            منتجات <span className="text-gradient-primary">المزين</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            أفضل منتجات العناية بالشعر والبشرة متوفرة في صالوننا
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {availableProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="group relative bg-white rounded-[18px] overflow-hidden shadow-soft hover:shadow-medium transition-all duration-200 border border-[#E5E7EB] hover:border-primary-200"
            >
              {/* Product Image */}
              <div className="aspect-square bg-gradient-to-br from-primary-50 to-primary-100/50 flex items-center justify-center">
                <span className="text-6xl sm:text-7xl transition-transform duration-200 group-hover:scale-110">
                  {product.image}
                </span>
              </div>

              {/* Available Badge */}
              <div className="absolute top-4 left-4">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20">
                  <Check className="w-3 h-3 text-[#22C55E]" />
                  <span className="text-xs font-semibold text-[#22C55E]">متوفر</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#111827] mb-1.5 group-hover:text-primary-600 transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gradient-primary">
                    {product.price}
                  </span>
                  <button className="px-4 py-2 rounded-xl gradient-primary text-white text-xs font-bold shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
                    اطلب الآن
                  </button>
                </div>
              </div>

              {/* Hover subtle glow */}
              <div className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ring-1 ring-primary-200/50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
