"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const defaultFAQs = [
  {
    id: 1,
    question: "كيف يمكنني حجز موعد؟",
    answer: "يمكنك حجز موعد بسهولة من خلال نموذج الحجز في موقعنا، أو الاتصال بنا مباشرة على رقم الهاتف. سنقوم بتأكيد حجزك عبر واتساب.",
  },
  {
    id: 2,
    question: "ما هي أوقات العمل؟",
    answer: "نعمل من السبت إلى الخميس من الساعة 9:00 صباحاً حتى 11:00 مساءً، ويوم الجمعة من الساعة 2:00 ظهراً حتى 11:00 مساءً.",
  },
  {
    id: 3,
    question: "هل تستخدمون منتجات أصلية؟",
    answer: "نعم، نستخدم أفضل المنتجات العالمية الأصلية للعناية بالشعر والبشرة، ونحرص على توفير أحدث المنتجات في عالم الحلاقة.",
  },
  {
    id: 4,
    question: "هل يمكنني إلغاء أو تغيير موعدي؟",
    answer: "نعم، يمكنك إلغاء أو تغيير موعدك عن طريق الاتصال بنا قبل 24 ساعة على الأقل من الموعد المحدد.",
  },
  {
    id: 5,
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "نقبل الدفع نقداً في الصالون. كما نوفر خيار الدفع الإلكتروني عبر التحويل البنكي للحجوزات المسبقة.",
  },
  {
    id: 6,
    question: "هل تقدمون خدمة العناية بالبشرة للرجال؟",
    answer: "نعم، نقدم جلسات عناية متكاملة بالبشرة للرجال باستخدام أفضل المنتجات الطبيعية، تشمل التنظيف العميق والتقشير والماسكات.",
  },
];

const FAQItem = ({
  faq,
  isOpen,
  onClick,
}: {
  faq: (typeof defaultFAQs)[0];
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border border-[#E5E7EB] rounded-[18px] overflow-hidden bg-white shadow-soft hover:shadow-medium transition-all duration-200">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 md:p-6 text-right"
      >
        <span className="text-[#111827] font-bold text-sm md:text-base flex-1">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-8 h-8 rounded-lg bg-[#F8FAFC] flex items-center justify-center flex-shrink-0 mr-3"
        >
          <ChevronDown className="w-4 h-4 text-[#6B7280]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="px-5 md:px-6 pb-5 md:pb-6 text-[#6B7280] text-sm leading-relaxed border-t border-[#E5E7EB] pt-4">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#F8FAFC] overflow-hidden">
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
            <HelpCircle className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-semibold text-primary-600">الأسئلة الشائعة</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">
            أسئلة <span className="text-gradient-primary">شائعة</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            إجابات لأكثر الأسئلة شيوعاً عن خدماتنا
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {defaultFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              <FAQItem
                faq={faq}
                isOpen={openId === faq.id}
                onClick={() => toggleFAQ(faq.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
