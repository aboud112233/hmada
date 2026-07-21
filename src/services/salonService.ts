import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export interface SalonSettings {
  name: string;
  logo: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  workingHours: {
    satToThu: { start: string; end: string };
    friday: { start: string; end: string };
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage: string;
  stats: {
    years: string;
    clients: string;
    services: string;
    rating: string;
  };
  aboutText: string;
  primaryColor: string;
  secondaryColor: string;
}

const SALON_DOC_ID = "salon-settings";

export async function getSalonSettings(): Promise<SalonSettings | null> {
  try {
    const docRef = doc(db, "settings", SALON_DOC_ID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as SalonSettings;
    }
    return null;
  } catch (error) {
    console.error("Error getting salon settings:", error);
    return null;
  }
}

export async function updateSalonSettings(
  settings: Partial<SalonSettings>
): Promise<boolean> {
  try {
    const docRef = doc(db, "settings", SALON_DOC_ID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      await updateDoc(docRef, settings);
    } else {
      await setDoc(docRef, settings);
    }
    return true;
  } catch (error) {
    console.error("Error updating salon settings:", error);
    return false;
  }
}

export async function initializeDefaultSettings(): Promise<boolean> {
  const defaultSettings: SalonSettings = {
    name: "المزين",
    logo: "",
    address: "العراق - الشطرة - الشعلة",
    phone: "+964 780 000 0000",
    whatsapp: "9647800000000",
    email: "info@almuzayen.com",
    workingHours: {
      satToThu: { start: "09:00", end: "23:00" },
      friday: { start: "14:00", end: "23:00" },
    },
    socialLinks: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
    heroTitle: "المزين",
    heroSubtitle: "لأناقتك تستحق الأفضل",
    heroDescription:
      "خبرة أكثر من 15 عامًا في عالم الحلاقة والعناية بالرجال، نقدم لك أحدث الصيحات وأعلى معايير الجودة",
    heroImage: "",
    stats: {
      years: "15+",
      clients: "10K+",
      services: "50+",
      rating: "4.9",
    },
    aboutText:
      "صالون حلاقة رجالي فاخر في العراق - الشطرة. نقدم أفضل خدمات الحلاقة والعناية بالرجال منذ أكثر من 15 عاماً.",
    primaryColor: "#7C3AED",
    secondaryColor: "#A78BFA",
  };

  return updateSalonSettings(defaultSettings);
}
