"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Clock, User, Phone, MessageSquare, Send, CheckCircle } from "lucide-react";

const services = [
  { id: "haircut", name: "قص شعر", price: "15,000 د.ع" },
  { id: "beard", name: "حلاقة لحية", price: "10,000 د.ع" },
  { id: "full", name: "حلاقة كاملة", price: "25,000 د.ع" },
  { id: "skincare", name: "تنظيف بشرة", price: "20,000 د.ع" },
  { id: "dye", name: "صبغات", price: "25,000 د.ع" },
  { id: "complete", name: "عناية كاملة", price: "40,000 د.ع" },
];

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format message for WhatsApp
    const message = `🔷 *حجز جديد في المزين* 🔷
    
👤 *الاسم:* ${formData.name}
📞 *الهاتف:* ${formData.phone}
✂️ *الخدمة:* ${formData.service}
📅 *التاريخ:* ${formData.date}
⏰ *الوقت:* ${formData.time}
📝 *ملاحظات:* ${formData.notes || "لا يوجد"}

📍 *العنوان:* العراق - الشطرة - الشعلة`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/9647800000000?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    setIsSubmitted(true);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="booking" className="relative py-24 bg-white overflow-hidden">
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
            <Calendar className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-semibold text-primary-600">احجز موعدك</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">
            احجز <span className="text-gradient-primary">موعدك الآن</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            املأ النموذج وسيتم إرسال طلبك عبر واتساب للتأكيد
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 rounded-full bg-[#22C55E]/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-[#22C55E]" />
              </div>
              <h3 className="text-2xl font-bold text-[#111827] mb-2">تم إرسال طلبك بنجاح!</h3>
              <p className="text-[#6B7280] mb-8">سيتم التواصل معك قريباً لتأكيد الموعد عبر واتساب</p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: "", phone: "", service: "", date: "", time: "", notes: "" });
                }}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-primary text-white font-bold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                حجز موعد آخر
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="group">
                <label className="block text-sm font-bold text-[#111827] mb-2">
                  <User className="w-4 h-4 inline ml-1.5 text-primary-500" />
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="أدخل اسمك الكامل"
                  className="w-full px-5 py-3.5 rounded-xl border-2 border-[#E5E7EB] bg-white text-[#111827] placeholder:text-[#9CA3AF] focus:border-primary-500 focus:outline-none transition-colors duration-200 text-sm"
                />
              </div>

              {/* Phone */}
              <div className="group">
                <label className="block text-sm font-bold text-[#111827] mb-2">
                  <Phone className="w-4 h-4 inline ml-1.5 text-primary-500" />
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="أدخل رقم هاتفك"
                  className="w-full px-5 py-3.5 rounded-xl border-2 border-[#E5E7EB] bg-white text-[#111827] placeholder:text-[#9CA3AF] focus:border-primary-500 focus:outline-none transition-colors duration-200 text-sm"
                />
              </div>

              {/* Service */}
              <div className="group">
                <label className="block text-sm font-bold text-[#111827] mb-2">
                  <MessageSquare className="w-4 h-4 inline ml-1.5 text-primary-500" />
                  الخدمة المطلوبة
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 rounded-xl border-2 border-[#E5E7EB] bg-white text-[#111827] focus:border-primary-500 focus:outline-none transition-colors duration-200 text-sm"
                >
                  <option value="">اختر الخدمة</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.name}>
                      {service.name} - {service.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-bold text-[#111827] mb-2">
                    <Calendar className="w-4 h-4 inline ml-1.5 text-primary-500" />
                    التاريخ
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={today}
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-[#E5E7EB] bg-white text-[#111827] focus:border-primary-500 focus:outline-none transition-colors duration-200 text-sm"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-bold text-[#111827] mb-2">
                    <Clock className="w-4 h-4 inline ml-1.5 text-primary-500" />
                    الوقت
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-[#E5E7EB] bg-white text-[#111827] focus:border-primary-500 focus:outline-none transition-colors duration-200 text-sm"
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="group">
                <label className="block text-sm font-bold text-[#111827] mb-2">
                  <MessageSquare className="w-4 h-4 inline ml-1.5 text-primary-500" />
                  ملاحظات إضافية
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="أي ملاحظات إضافية (اختياري)"
                  className="w-full px-5 py-3.5 rounded-xl border-2 border-[#E5E7EB] bg-white text-[#111827] placeholder:text-[#9CA3AF] focus:border-primary-500 focus:outline-none transition-colors duration-200 text-sm resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl gradient-primary text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                إرسال عبر واتساب
              </button>

              <p className="text-center text-xs text-[#9CA3AF]">
                بالضغط على إرسال، ستتم إعادة توجيهك إلى واتساب لتأكيد الحجز
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
