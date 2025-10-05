import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDm4o9M4Rqd5jXvV32wVYLbweaaQjK7i9s",
  authDomain: "gym-management-70ffb.firebaseapp.com",
  projectId: "gym-management-70ffb",
  storageBucket: "gym-management-70ffb.appspot.com", // ✅ fixed here
  messagingSenderId: "33393905578",
  appId: "1:33393905578:web:ab37321fb3788cc21c65d3",
  measurementId: "G-4FM74X8TWN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
