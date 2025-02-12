// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1UVz01H09ebWvwQyU5f1q3v5Chxot_WU",
  authDomain: "trippin-3902b.firebaseapp.com",
  projectId: "trippin-3902b",
  storageBucket: "trippin-3902b.firebasestorage.app",
  messagingSenderId: "696841182746",
  appId: "1:696841182746:web:f6e5fcf23fc280ead6fba3",
  measurementId: "G-QDNNNS4ZQP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);