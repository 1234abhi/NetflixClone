// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5daCl_yjx8TSN3QnI0chZojtsn8U28Cs",
  authDomain: "netflix-clone-c8c02.firebaseapp.com",
  projectId: "netflix-clone-c8c02",
  storageBucket: "netflix-clone-c8c02.appspot.com",
  messagingSenderId: "158937256209",
  appId: "1:158937256209:web:4b414e8c5b4581afa53cb0",
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
