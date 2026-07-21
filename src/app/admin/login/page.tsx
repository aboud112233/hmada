export default function AdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          تسجيل دخول المدير
        </h1>

        <input
          type="email"
          placeholder="البريد الإلكتروني"
          className="w-full border rounded-lg p-3 mb-4"
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          className="w-full border rounded-lg p-3 mb-6"
        />

        <button className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700">
          تسجيل الدخول
        </button>
      </div>
    </div>
  );
}