// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxPcpR3uGsUwDgmNOYXWvjzlZDxy2A5_k",
  authDomain: "auth-firebase-context-ta-37d4b.firebaseapp.com",
  projectId: "auth-firebase-context-ta-37d4b",
  storageBucket: "auth-firebase-context-ta-37d4b.appspot.com",
  messagingSenderId: "246918652411",
  appId: "1:246918652411:web:b75b98d85bf0d1b8f82b5e",
  measurementId: "G-0Z20QC9WNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app