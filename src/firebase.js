// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnf6p1ZoH9kiSRRy1GFBSHL6lr6m8-hJ0",
  authDomain: "testing-c8f6a.firebaseapp.com",
  databaseURL: "https://testing-c8f6a-default-rtdb.firebaseio.com",
  projectId: "testing-c8f6a",
  storageBucket: "testing-c8f6a.appspot.com",
  messagingSenderId: "603996485236",
  appId: "1:603996485236:web:6a6a6dd3afc321ee7d0321",
  measurementId: "G-CEWP36W3VQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig) , db = getDatabase(app);

const analytics = getAnalytics(app);