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

export interface Service {
  id?: string;
  title: string;
  description: string;
  price: string;
  icon: string;
  features: string[];
  category: string;
  order: number;
  active: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

const COLLECTION_NAME = "services";

export async function getServices(): Promise<Service[]> {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy("order", "asc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Service[];
  } catch (error) {
    console.error("Error getting services:", error);
    return [];
  }
}

export async function getActiveServices(): Promise<Service[]> {
  try {
    const services = await getServices();
    return services.filter((s) => s.active);
  } catch (error) {
    console.error("Error getting active services:", error);
    return [];
  }
}

export async function createService(
  service: Omit<Service, "id" | "createdAt" | "updatedAt">
): Promise<string | null> {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...service,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating service:", error);
    return null;
  }
}

export async function updateService(
  id: string,
  data: Partial<Service>
): Promise<boolean> {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: Timestamp.now(),
    });
    return true;
  } catch (error) {
    console.error("Error updating service:", error);
    return false;
  }
}

export async function deleteService(id: string): Promise<boolean> {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
    return true;
  } catch (error) {
    console.error("Error deleting service:", error);
    return false;
  }
}
