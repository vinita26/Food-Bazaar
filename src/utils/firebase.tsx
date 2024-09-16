// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCe-hlMXuEHz_0WHGZ8rx5R3V7170500A",
  authDomain: "foodbazar-ebfd7.firebaseapp.com",
  projectId: "foodbazar-ebfd7",
  storageBucket: "foodbazar-ebfd7.appspot.com",
  messagingSenderId: "529664200344",
  appId: "1:529664200344:web:869ed73758915a6596caed",
  measurementId: "G-YK5PL7SR4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);