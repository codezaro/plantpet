import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCyzpL4R-UB85ILSoTan9Y-GYbAtWVLUgE",
  authDomain: "plant-care-companion-c4a6b.firebaseapp.com",
  projectId: "plant-care-companion-c4a6b",
  storageBucket: "plant-care-companion-c4a6b.firebasestorage.app",
  messagingSenderId: "543422498415",
  appId: "1:543422498415:web:9097b58b47a8727b9c2f9a",
  measurementId: "G-H1VL86YFY9",
};

const app = initializeApp(firebaseConfig);

// Initialize Auth - persists automatically with AsyncStorage in React Native
export const auth = getAuth(app);

export default app;
