"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";

export default function ServicesPage() {
  const [services, setServices] = useState([
    { id: 1, name: "قص شعر", price: "10000" },
    { id: 2, name: "حلاقة لحية", price: "5000" },
  ]);

  const addService = () => {
    setServices([
      ...services,
      {
        id: Date.now(),
        name: "خدمة جديدة",
        price: "0",
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold">
          إدارة الخدمات
        </h1>

        <button
          onClick={addService}
          className="bg-purple-600 text-white px-5 py-3 rounded-xl"
        >
          + إضافة خدمة
        </button>
      </div>

      <div className="space-y-4">

        {services.map((service) => (

          <div
            key={service.id}
            className="bg-white rounded-2xl shadow p-5 flex justify-between items-center"
          >

            <div>
              <h2 className="font-bold text-lg">
                {service.name}
              </h2>

              <p>
                {service.price} د.ع
              </p>
            </div>

            <div className="space-x-2">

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