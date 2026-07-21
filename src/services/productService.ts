import { db, storage } from "@/lib/firebase";
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
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

export interface Product {
  id?: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  status: "available" | "unavailable";
  order: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

const COLLECTION_NAME = "products";

export async function getProducts(): Promise<Product[]> {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy("order", "asc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Product[];
  } catch (error) {
    console.error("Error getting products:", error);
    return [];
  }
}

export async function getAvailableProducts(): Promise<Product[]> {
  try {
    const products = await getProducts();
    return products.filter((p) => p.status === "available");
  } catch (error) {
    console.error("Error getting available products:", error);
    return [];
  }
}

export async function createProduct(
  product: Omit<Product, "id" | "createdAt" | "updatedAt">
): Promise<string | null> {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...product,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating product:", error);
    return null;
  }
}

export async function updateProduct(
  id: string,
  data: Partial<Product>
): Promise<boolean> {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: Timestamp.now(),
    });
    return true;
  } catch (error) {
    console.error("Error updating product:", error);
    return false;
  }
}

export async function deleteProduct(id: string, imageUrl?: string): Promise<boolean> {
  try {
    // Delete image from storage if exists
    if (imageUrl) {
      try {
        const imageRef = ref(storage, imageUrl);
        await deleteObject(imageRef);
      } catch (e) {
        console.warn("Could not delete image:", e);
      }
    }
    await deleteDoc(doc(db, COLLECTION_NAME, id));
    return true;
  } catch (error) {
    console.error("Error deleting product:", error);
    return false;
  }
}

export async function uploadProductImage(
  file: File,
  productId: string
): Promise<string | null> {
  try {
    const storageRef = ref(storage, `products/${productId}/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error("Error uploading product image:", error);
    return null;
  }
}
