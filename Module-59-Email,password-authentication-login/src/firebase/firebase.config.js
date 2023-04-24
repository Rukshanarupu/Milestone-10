// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwjjjP5OwuJ6j5WcNy4Gk4hGdcFIL__-0",
  authDomain: "name-password-authentication.firebaseapp.com",
  projectId: "name-password-authentication",
  storageBucket: "name-password-authentication.appspot.com",
  messagingSenderId: "857596611805",
  appId: "1:857596611805:web:39569573abaa4ccd381f34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app