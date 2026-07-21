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

export interface GalleryImage {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  order: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

const COLLECTION_NAME = "gallery";

export async function getGalleryImages(): Promise<GalleryImage[]> {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy("order", "asc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as GalleryImage[];
  } catch (error) {
    console.error("Error getting gallery images:", error);
    return [];
  }
}

export async function createGalleryImage(
  image: Omit<GalleryImage, "id" | "createdAt" | "updatedAt">
): Promise<string | null> {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...image,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating gallery image:", error);
    return null;
  }
}

export async function updateGalleryImage(
  id: string,
  data: Partial<GalleryImage>
): Promise<boolean> {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: Timestamp.now(),
    });
    return true;
  } catch (error) {
    console.error("Error updating gallery image:", error);
    return false;
  }
}

export async function deleteGalleryImage(
  id: string,
  imageUrl?: string
): Promise<boolean> {
  try {
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
    console.error("Error deleting gallery image:", error);
    return false;
  }
}

export async function uploadGalleryImage(
  file: File,
  imageId: string
): Promise<string | null> {
  try {
    const storageRef = ref(storage, `gallery/${imageId}/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error("Error uploading gallery image:", error);
    return null;
  }
}
