export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-100">

      <aside className="w-64 bg-white shadow-lg p-6">

        <h1 className="text-2xl font-bold text-purple-700 mb-8">
          المزين
        </h1>

        <nav className="space-y-3">

          <a href="/admin/dashboard" className="block p-3 rounded-lg hover:bg-purple-100">
            📊 لوحة التحكم
          </a>

          <a href="/admin/bookings" className="block p-3 rounded-lg hover:bg-purple-100">
            📅 الحجوزات
          </a>

          <a href="/admin/services" className="block p-3 rounded-lg hover:bg-purple-100">
            💈 الخدمات
          </a>

          <a href="/admin/products" className="block p-3 rounded-lg hover:bg-purple-100">
            🧴 المنتجات
          </a>

          <a href="/admin/gallery" className="block p-3 rounded-lg hover:bg-purple-100">
            🖼️ معرض الصور
          </a>

          <a href="/admin/settings" className="block p-3 rounded-lg hover:bg-purple-100">
            ⚙️ الإعدادات
          </a>

        </nav>

      </aside>

      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}