// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB1w0dNU8Ip8N6P_ndxEc__SrV8s3XBvg",
  authDomain: "prep4hire-da8d1.firebaseapp.com",
  projectId: "prep4hire-da8d1",
  storageBucket: "prep4hire-da8d1.firebasestorage.app",
  messagingSenderId: "745683050011",
  appId: "1:745683050011:web:bb8c4d21334a8c0068e2be",
  measurementId: "G-FXE7JD2849"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);