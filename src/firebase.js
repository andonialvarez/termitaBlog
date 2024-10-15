// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdEMyae4VbybI0KgP0O9W4gJPKQWo__30",
  authDomain: "blog-cine.firebaseapp.com",
  projectId: "blog-cine",
  storageBucket: "blog-cine.appspot.com",
  messagingSenderId: "1044069423611",
  appId: "1:1044069423611:web:354ef00d8234866b3dd35e",
  measurementId: "G-M13W23VKYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);