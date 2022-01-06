import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAuKBLx1HomMDN75iRi5ldhZmll6_9SYd0",
  authDomain: "practice-auth-cb566.firebaseapp.com",
  projectId: "practice-auth-cb566",
  storageBucket: "practice-auth-cb566.appspot.com",
  messagingSenderId: "137151965920",
  appId: "1:137151965920:web:bdbba17fc2f8c1eb003e85",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
