"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MessageCircle, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "محمد الجابري",
    rating: 5,
    text: "أفضل صالون حلاقة زرته في العراق. العناية بالتفاصيل والاحترافية في العمل لا توصف. أنصح الجميع بتجربة خدماتهم.",
    date: "قبل 3 أيام",
  },
  {
    id: 2,
    name: "سامر العبيدي",
    rating: 5,
    text: "صراحة خدمة ممتازة وأسعار معقولة. الحلاق أحمد فنان في قصات الشعر العصرية. كل الاحترام لفريق العمل.",
    date: "قبل أسبوع",
  },
  {
    id: 3,
    name: "كريم الناصري",
    rating: 5,
    text: "جربت عندهم خدمة تنظيف البشرة وكانت تجربة رائعة. النتائج مبهرة والمنتجات طبيعية 100%. سأكرر الزيارة بالتأكيد.",
    date: "قبل أسبوعين",
  },
  {
    id: 4,
    name: "عبدالله الشمري",
    rating: 4,
    text: "صالون راقي ونظيف. الحلاقون محترفون وودودون. أحببت الأجواء والترحيب. خدمة الحلاقة واللحية ممتازة.",
    date: "قبل شهر",
  },
  {
    id: 5,
    name: "حسين الزبيدي",
    rating: 5,
    text: "من أفضل صالونات الحلاقة في الشطرة. الأسعار مناسبة والخدمة متميزة. الاستقبال رائع والمكان نظيف ومرتب.",
    date: "قبل شهر",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "text-[#22C55E] fill-[#22C55E]" : "text-[#E5E7EB]"
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-4">
            <MessageCircle className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-semibold text-primary-600">آراء العملاء</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">
            ماذا يقول <span className="text-gradient-primary">عملاؤنا</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            آراء العملاء هي سر نجاحنا وتطويرنا المستمر
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="bg-white rounded-[18px] p-8 shadow-soft hover:shadow-medium transition-all duration-200 border border-[#E5E7EB]"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white text-lg font-bold shadow-soft">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#111827] text-sm">{testimonial.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <StarRating rating={testimonial.rating} />
                    <span className="text-xs text-[#6B7280]">{testimonial.date}</span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <p className="text-[#6B7280] text-sm leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-[18px] p-8 shadow-soft border border-[#E5E7EB] max-w-md mx-auto"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white text-lg font-bold">
                  {testimonials[currentSlide].name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#111827] text-sm">{testimonials[currentSlide].name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <StarRating rating={testimonials[currentSlide].rating} />
                    <span className="text-xs text-[#6B7280]">{testimonials[currentSlide].date}</span>
                  </div>
                </div>
              </div>
              <p className="text-[#6B7280] text-sm leading-relaxed">&ldquo;{testimonials[currentSlide].text}&rdquo;</p>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-soft border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-primary-500 transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-soft border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-primary-500 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide ? "bg-primary-500 w-6" : "bg-[#E5E7EB] hover:bg-[#D1D5DB]"
                }`}
                aria-label={`الانتقال إلى رأي ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.2, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-6 bg-[#F8FAFC] rounded-[18px] px-8 py-5 shadow-soft border border-[#E5E7EB]">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 text-[#22C55E] fill-[#22C55E]"
                />
              ))}
            </div>
            <div className="text-right">
              <div className="text-2xl font-black text-gradient-primary">4.8</div>
              <div className="text-xs text-[#6B7280]">من 5 نجوم</div>
            </div>
            <div className="w-px h-8 bg-[#E5E7EB]" />
            <div className="text-right">
              <div className="text-lg font-bold text-[#111827]">+500</div>
              <div className="text-xs text-[#6B7280]">تقييم</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
