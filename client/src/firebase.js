// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRBASE_API_KEY,
  authDomain: "fortune-estate-d3803.firebaseapp.com",
  projectId: "fortune-estate-d3803",
  storageBucket: "fortune-estate-d3803.appspot.com",
  messagingSenderId: "313375626332",
  appId: "1:313375626332:web:1cc600afe2f983be570299",
  measurementId: "G-PR9MS1BGNV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
