// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRa6mmEbNSqtap4Y19nLh1kTImmXycGPY",
  authDomain: "tigerdev-407fe.firebaseapp.com",
  databaseURL: "https://tigerdev-407fe-default-rtdb.firebaseio.com",
  projectId: "tigerdev-407fe",
  storageBucket: "tigerdev-407fe.appspot.com",
  messagingSenderId: "155731381226",
  appId: "1:155731381226:web:462ae5a8185a9763b90093",
  measurementId: "G-DG1DJW6E82"
};

// console.log(firebaseConfig);
// Initialize Firebase
export const app = initializeApp(firebaseConfig) , db = getDatabase(app);

// const analytics = getAnalytics(app);