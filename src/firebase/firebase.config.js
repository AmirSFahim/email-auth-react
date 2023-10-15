// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu-6m9H79rrEyhCheharNbHYiQ1hkoCxQ",
  authDomain: "email-auth-react-763dd.firebaseapp.com",
  projectId: "email-auth-react-763dd",
  storageBucket: "email-auth-react-763dd.appspot.com",
  messagingSenderId: "29900406409",
  appId: "1:29900406409:web:289ea5e75cc159bb669058"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app