import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";

export interface FAQ {
  id?: string;
  question: string;
  answer: string;
  order: number;
  active: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface Banner {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  active: boolean;
  order: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface WorkingDay {
  id?: string;
  date: string;
  isHoliday: boolean;
  reason?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// FAQ Services
const FAQ_COLLECTION = "faq";

export async function getFAQs(): Promise<FAQ[]> {
  try {
    const q = query(collection(db, FAQ_COLLECTION), orderBy("order", "asc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as FAQ[];
  } catch (error) {
    console.error("Error getting FAQs:", error);
    return [];
  }
}

export async function getActiveFAQs(): Promise<FAQ[]> {
  try {
    const faqs = await getFAQs();
    return faqs.filter((f) => f.active);
  } catch (error) {
    console.error("Error getting active FAQs:", error);
    return [];
  }
}

export async function createFAQ(
  faq: Omit<FAQ, "id" | "createdAt" | "updatedAt">
): Promise<string | null> {
  try {
    const docRef = await addDoc(collection(db, FAQ_COLLECTION), {
      ...faq,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating FAQ:", error);
    return null;
  }
}

export async function updateFAQ(
  id: string,
  data: Partial<FAQ>
): Promise<boolean> {
  try {
    const docRef = doc(db, FAQ_COLLECTION, id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: Timestamp.now(),
    });
    return true;
  } catch (error) {
    console.error("Error updating FAQ:", error);
    return false;
  }
}

export async function deleteFAQ(id: string): Promise<boolean> {
  try {
    await deleteDoc(doc(db, FAQ_COLLECTION, id));
    return true;
  } catch (error) {
    console.error("Error deleting FAQ:", error);
    return false;
  }
}

// Banner Services
const BANNER_COLLECTION = "banners";

export async function getBanners(): Promise<Banner[]> {
  try {
    const q = query(collection(db, BANNER_COLLECTION), orderBy("order", "asc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Banner[];
  } catch (error) {
    console.error("Error getting banners:", error);
    return [];
  }
}

export async function getActiveBanners(): Promise<Banner[]> {
  try {
    const banners = await getBanners();
    return banners.filter((b) => b.active);
  } catch (error) {
    console.error("Error getting active banners:", error);
    return [];
  }
}

export async function createBanner(
  banner: Omit<Banner, "id" | "createdAt" | "updatedAt">
): Promise<string | null> {
  try {
    const docRef = await addDoc(collection(db, BANNER_COLLECTION), {
      ...banner,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating banner:", error);
    return null;
  }
}

export async function updateBanner(
  id: string,
  data: Partial<Banner>
): Promise<boolean> {
  try {
    const docRef = doc(db, BANNER_COLLECTION, id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: Timestamp.now(),
    });
    return true;
  } catch (error) {
    console.error("Error updating banner:", error);
    return false;
  }
}

export async function deleteBanner(id: string): Promise<boolean> {
  try {
    await deleteDoc(doc(db, BANNER_COLLECTION, id));
    return true;
  } catch (error) {
    console.error("Error deleting banner:", error);
    return false;
  }
}

// Working Days / Holidays Services
const HOLIDAYS_COLLECTION = "holidays";

export async function getHolidays(): Promise<WorkingDay[]> {
  try {
    const q = query(collection(db, HOLIDAYS_COLLECTION), orderBy("date", "asc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as WorkingDay[];
  } catch (error) {
    console.error("Error getting holidays:", error);
    return [];
  }
}

export async function addHoliday(
  holiday: Omit<WorkingDay, "id" | "createdAt" | "updatedAt">
): Promise<string | null> {
  try {
    const docRef = await addDoc(collection(db, HOLIDAYS_COLLECTION), {
      ...holiday,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding holiday:", error);
    return null;
  }
}

export async function removeHoliday(id: string): Promise<boolean> {
  try {
    await deleteDoc(doc(db, HOLIDAYS_COLLECTION, id));
    return true;
  } catch (error) {
    console.error("Error removing holiday:", error);
    return false;
  }
}

export async function isDateHoliday(date: string): Promise<boolean> {
  try {
    const holidays = await getHolidays();
    return holidays.some((h) => h.date === date && h.isHoliday);
  } catch (error) {
    console.error("Error checking holiday:", error);
    return false;
  }
}
