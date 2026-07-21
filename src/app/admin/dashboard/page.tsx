export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">لوحة تحكم المزين</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-bold text-lg">الحجوزات</h2>
          <p>إدارة جميع الحجوزات</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-bold text-lg">الخدمات</h2>
          <p>إضافة وتعديل الخدمات</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-bold text-lg">المنتجات</h2>
          <p>إدارة المنتجات والأسعار</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-bold text-lg">الإعدادات</h2>
          <p>تعديل معلومات الموقع</p>
        </div>

      </div>
    </div>
  );
}