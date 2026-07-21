"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Image, X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    title: "صالون المزين",
    description: "الداخلية الفاخرة للصالون",
    gradient: "from-purple-400 to-purple-600",
    icon: "💈",
  },
  {
    id: 2,
    title: "قصات عصرية",
    description: "أحدث صيحات قصات الشعر",
    gradient: "from-violet-400 to-violet-600",
    icon: "✂️",
  },
  {
    id: 3,
    title: "العناية باللحية",
    description: "تشذيب وتصفيف احترافي",
    gradient: "from-indigo-400 to-indigo-600",
    icon: "🧔",
  },
  {
    id: 4,
    title: "جلسات العناية",
    description: "منتجات طبيعية للعناية بالبشرة",
    gradient: "from-fuchsia-400 to-fuchsia-600",
    icon: "✨",
  },
  {
    id: 5,
    title: "فريق العمل",
    description: "نخبة من أمهر الحلاقين",
    gradient: "from-purple-400 to-pink-500",
    icon: "👨‍💼",
  },
  {
    id: 6,
    title: "الأجواء",
    description: "أجواء راقية ومريحة",
    gradient: "from-violet-400 to-purple-600",
    icon: "🌟",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="relative py-24 bg-white overflow-hidden">
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
            <Image className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-semibold text-primary-600">معرض الصور</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">
            معرض <span className="text-gradient-primary">المزين</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            صور من داخل صالوننا وأعمالنا المميزة
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              onClick={() => setSelectedImage(image)}
              className="group relative cursor-pointer rounded-[18px] overflow-hidden shadow-soft hover:shadow-medium transition-all duration-200"
            >
              <div className={`aspect-square bg-gradient-to-br ${image.gradient} flex items-center justify-center`}>
                <span className="text-6xl sm:text-7xl transition-transform duration-200 group-hover:scale-110">
                  {image.icon}
                </span>
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            <div className={`rounded-[18px] overflow-hidden bg-gradient-to-br ${selectedImage.gradient} aspect-square flex items-center justify-center`}>
              <span className="text-8xl">{selectedImage.icon}</span>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-white font-bold text-xl">{selectedImage.title}</h3>
              <p className="text-white/70">{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
