import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp,
} from "firebase/firestore";

export interface Booking {
  id?: string;
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

const COLLECTION_NAME = "bookings";

export async function createBooking(
  booking: Omit<Booking, "id" | "createdAt" | "updatedAt" | "status">
): Promise<string | null> {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...booking,
      status: "pending",
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating booking:", error);
    return null;
  }
}

export async function getBookings(): Promise<Booking[]> {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Booking[];
  } catch (error) {
    console.error("Error getting bookings:", error);
    return [];
  }
}

export async function getBookingsByDate(date: string): Promise<Booking[]> {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      where("date", "==", date),
      where("status", "in", ["pending", "confirmed"])
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Booking[];
  } catch (error) {
    console.error("Error getting bookings by date:", error);
    return [];
  }
}

export async function getBookedTimes(date: string): Promise<string[]> {
  try {
    const bookings = await getBookingsByDate(date);
    return bookings.map((b) => b.time);
  } catch (error) {
    console.error("Error getting booked times:", error);
    return [];
  }
}

export async function updateBookingStatus(
  id: string,
  status: Booking["status"]
): Promise<boolean> {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, {
      status,
      updatedAt: Timestamp.now(),
    });
    return true;
  } catch (error) {
    console.error("Error updating booking status:", error);
    return false;
  }
}

export async function updateBooking(
  id: string,
  data: Partial<Booking>
): Promise<boolean> {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: Timestamp.now(),
    });
    return true;
  } catch (error) {
    console.error("Error updating booking:", error);
    return false;
  }
}

export async function deleteBooking(id: string): Promise<boolean> {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
    return true;
  } catch (error) {
    console.error("Error deleting booking:", error);
    return false;
  }
}

export async function getBookingStats(): Promise<{
  total: number;
  pending: number;
  confirmed: number;
  cancelled: number;
  completed: number;
  todayCount: number;
}> {
  try {
    const bookings = await getBookings();
    const today = new Date().toISOString().split("T")[0];
    const todayBookings = bookings.filter((b) => b.date === today);

    return {
      total: bookings.length,
      pending: bookings.filter((b) => b.status === "pending").length,
      confirmed: bookings.filter((b) => b.status === "confirmed").length,
      cancelled: bookings.filter((b) => b.status === "cancelled").length,
      completed: bookings.filter((b) => b.status === "completed").length,
      todayCount: todayBookings.length,
    };
  } catch (error) {
    console.error("Error getting booking stats:", error);
    return {
      total: 0,
      pending: 0,
      confirmed: 0,
      cancelled: 0,
      completed: 0,
      todayCount: 0,
    };
  }
}

export async function getMostRequestedServices(): Promise<
  { name: string; count: number }[]
> {
  try {
    const bookings = await getBookings();
    const serviceCount: Record<string, number> = {};

    bookings.forEach((booking) => {
      if (booking.status !== "cancelled") {
        serviceCount[booking.service] =
          (serviceCount[booking.service] || 0) + 1;
      }
    });

    return Object.entries(serviceCount)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  } catch (error) {
    console.error("Error getting most requested services:", error);
    return [];
  }
}
