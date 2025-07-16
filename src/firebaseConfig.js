import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYzjih0-nrXfOaoC7A9Y0M0szC0r0-wB4",
  authDomain: "prueba-frontend-d9730.firebaseapp.com",
  projectId: "prueba-frontend-d9730",
  storageBucket: "prueba-frontend-d9730.appspot.com",
  messagingSenderId: "263180118047",
  appId: "1:263180118047:web:107c56337e2610fc270d2a",
  measurementId: "G-8EPX2Y69R3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
