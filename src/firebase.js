import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDk-SUvQlC7J3lq1xMigywSs9nkrN8FX7M",
  authDomain: "apple-store-app.firebaseapp.com",
  projectId: "apple-store-app",
  storageBucket: "apple-store-app.appspot.com",
  messagingSenderId: "508280065025",
  appId: "1:508280065025:web:98bdfbdabd93ad941a0400",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
