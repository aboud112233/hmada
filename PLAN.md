# خطة تطوير مشروع "المزين" - Production Ready

## تحليل الوضع الراهن

### الموجود حالياً:
- ✅ Next.js 16 + TypeScript + Tailwind v4
- ✅ Framer Motion + Lucide React
- ✅ تصميم Minimal Premium بنفسجي/أبيض
- ✅ RTL + خط Cairo
- ✅ المكونات: Hero, Services, Gallery, Pricing, Testimonials, Location, Booking, Footer
- ✅ حجز عبر واتساب (بدون Firebase)
- ⛔ لا يوجد Firebase
- ⛔ لا يوجد لوحة تحكم
- ⛔ لا يوجد FAQ أو "لماذا تختارنا"
- ⛔ لا يوجد إدارة منتجات
- ⛔ لا يوجد نظام أوقات متاحة

## الخطة التفصيلية - 8 مراحل

### المرحلة 1: البنية التحتية والأساس
- [ ] إنشاء مجلد `src/lib/` وملف `firebase.ts` - تهيئة Firebase (Firestore, Auth, Storage)
- [ ] إنشاء ملف `.env.local` مع متغيرات Firebase
- [ ] إنشاء `src/lib/firebaseConfig.ts` - إعدادات Firebase
- [ ] إنشاء `src/services/salonService.ts` - خدمة إدارة بيانات الصالون
- [ ] إنشاء `src/services/bookingService.ts` - خدمة إدارة الحجوزات
- [ ] إنشاء `src/services/serviceService.ts` - خدمة إدارة الخدمات
- [ ] إنشاء `src/services/productService.ts` - خدمة إدارة المنتجات
- [ ] إنشاء `src/services/galleryService.ts` - خدمة إدارة معرض الصور

### المرحلة 2: تطوير المكونات الجديدة
- [ ] إنشاء `src/components/Navbar.tsx` - شريط تنقل احترافي
- [ ] إنشاء `src/components/WhyUs.tsx` - قسم "لماذا تختارنا"
- [ ] إنشاء `src/components/FAQ.tsx` - الأسئلة الشائعة (ديناميكي من Firebase)
- [ ] إنشاء `src/components/Toast.tsx` - إشعارات Toast
- [ ] تحديث `src/components/Booking.tsx` - إضافة Firebase للحجز والتحقق من الأوقات المتاحة
- [ ] تحديث `src/components/Gallery.tsx` - جلب الصور من Firebase Storage
- [ ] تحديث `src/components/Services.tsx` - جلب الخدمات من Firebase
- [ ] تحديث `src/components/Hero.tsx` - جلب بيانات الصالون من Firebase
- [ ] تحديث `src/components/Footer.tsx` - جلب معلومات التواصل من Firebase

### المرحلة 3: نظام الحجز الذكي
- [ ] إنشاء `src/lib/timeUtils.ts` - أدوات حساب الأوقات المتاحة
- [ ] إنشاء منطق التحقق من الأوقات المحجوزة
- [ ] إظهار أقرب وقت متاح إذا كان الوقت محجوزاً
- [ ] حفظ الحجز في Firebase
- [ ] Toast Notification بعد نجاح الحجز
- [ ] فتح WhatsApp تلقائياً برسالة منسقة

### المرحلة 4: لوحة التحكم (Admin Dashboard)
- [ ] إنشاء `src/app/admin/login/page.tsx` - صفحة تسجيل الدخول
- [ ] إنشاء `src/app/admin/layout.tsx` - تخطيط لوحة التحكم
- [ ] إنشاء `src/app/admin/dashboard/page.tsx` - لوحة الإحصائيات الرئيسية
- [ ] إنشاء `src/app/admin/bookings/page.tsx` - إدارة الحجوزات
- [ ] إنشاء `src/app/admin/services/page.tsx` - إدارة الخدمات
- [ ] إنشاء `src/app/admin/pricing/page.tsx` - إدارة الأسعار
- [ ] إنشاء `src/app/admin/gallery/page.tsx` - إدارة معرض الصور
- [ ] إنشاء `src/app/admin/products/page.tsx` - إدارة المنتجات
- [ ] إنشاء `src/app/admin/settings/page.tsx` - إعدادات الصالون
- [ ] إنشاء `src/app/admin/working-hours/page.tsx` - أوقات العمل والإجازات
- [ ] إنشاء `src/app/admin/faq/page.tsx` - إدارة الأسئلة الشائعة
- [ ] إنشاء `src/app/admin/testimonials/page.tsx` - إدارة آراء العملاء
- [ ] إنشاء `src/app/admin/banners/page.tsx` - إدارة البنرات والإعلانات

### المرحلة 5: مكونات لوحة التحكم
- [ ] إنشاء `src/components/admin/AdminSidebar.tsx` - القائمة الجانبية
- [ ] إنشاء `src/components/admin/AdminHeader.tsx` - الهيدر
- [ ] إنشاء `src/components/admin/StatsCard.tsx` - بطاقة إحصائيات
- [ ] إنشاء `src/components/admin/DataTable.tsx` - جدول بيانات عام
- [ ] إنشاء `src/components/admin/ImageUpload.tsx` - رفع الصور
- [ ] إنشاء `src/components/admin/Modal.tsx` - نافذة منبثقة
- [ ] إنشاء `src/components/admin/ConfirmDialog.tsx` - تأكيد الحذف
- [ ] إنشاء `src/components/admin/LoadingSkeleton.tsx` - Skeleton Loading

### المرحلة 6: إدارة المنتجات
- [ ] إنشاء `src/app/admin/products/page.tsx` - واجهة المنتجات
- [ ] إنشاء `src/components/Products.tsx` - عرض المنتجات في الموقع
- [ ] إنشاء `src/components/admin/ProductForm.tsx` - نموذج إضافة/تعديل منتج
- [ ] رفع صور المنتجات إلى Firebase Storage
- [ ] حالة المنتج (متوفر/غير متوفر)

### المرحلة 7: تحسين الأداء و SEO
- [ ] إضافة `metadata` محسّن لجميع الصفحات
- [ ] إنشاء `src/app/sitemap.ts` - Sitemap
- [ ] إنشاء `public/robots.txt` - robots.txt
- [ ] إضافة Schema.org Local Business
- [ ] Lazy Loading للصور
- [ ] Skeleton Loading للمكونات
- [ ] تحسين Framer Motion (200ms انتقالات)
- [ ] ضغط الصور

### المرحلة 8: الأمان والاختبارات النهائية
- [ ] Firebase Security Rules
- [ ] التحقق من جميع المدخلات
- [ ] Rate Limiting
- [ ] منع XSS
- [ ] حماية API routes
- [ ] تشغيل `npm run build` للتأكد من عدم وجود أخطاء
- [ ] تشغيل `npm run dev` للتأكد من عمل كل شيء

## الملفات التي سيتم إنشاؤها:

### جذر المشروع:
- `.env.local` - متغيرات Firebase

### src/lib/:
- `firebase.ts` - تهيئة Firebase
- `firebaseConfig.ts` - إعدادات Firebase
- `timeUtils.ts` - أدوات الوقت

### src/services/:
- `salonService.ts`
- `bookingService.ts`  
- `serviceService.ts`
- `productService.ts`
- `galleryService.ts`
- `settingsService.ts`

### src/components/:
- `Navbar.tsx`
- `WhyUs.tsx`
- `FAQ.tsx`
- `Toast.tsx`
- `Products.tsx`
- `Skeleton.tsx`

### src/components/admin/:
- `AdminSidebar.tsx`
- `AdminHeader.tsx`
- `StatsCard.tsx`
- `DataTable.tsx`
- `ImageUpload.tsx`
- `Modal.tsx`
- `ConfirmDialog.tsx`
- `LoadingSkeleton.tsx`

### src/app/admin/:
- `login/page.tsx`
- `layout.tsx`
- `dashboard/page.tsx`
- `bookings/page.tsx`
- `services/page.tsx`
- `pricing/page.tsx`
- `gallery/page.tsx`
- `products/page.tsx`
- `settings/page.tsx`
- `working-hours/page.tsx`
- `faq/page.tsx`
- `testimonials/page.tsx`
- `banners/page.tsx`

### src/app/:
- `sitemap.ts`
- `robots.txt`

## متغيرات Firebase المطلوبة (.env.local):
```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_WHATSAPP_NUMBER=9647800000000
```

## تحديث package.json - إضافة:
- `firebase` ✅
- `uuid` ✅ (لإنشاء معرفات فريدة)
