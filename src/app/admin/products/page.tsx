"use client";

import { useState } from "react";

export default function ProductsPage() {
  const [products] = useState([
    {
      id: 1,
      name: "شامبو احترافي",
      price: "15000",
      status: "متوفر",
    },
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">إدارة المنتجات</h1>

        <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl">
          + إضافة منتج
        </button>
      </div>

      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow p-5 flex justify-between items-center"
          >
            <div>
              <h2 className="font-bold text-lg">{product.name}</h2>
              <p>{product.price} د.ع</p>
              <span className="text-green-600">{product.status}</span>
            </div>

            <div className="flex gap-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                تعديل
              </button>

              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}