// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbvKYgYZVcbcDyPij-0yb190tOrZZlsgM",
  authDomain: "bookstore-inventory-853c3.firebaseapp.com",
  projectId: "bookstore-inventory-853c3",
  storageBucket: "bookstore-inventory-853c3.firebasestorage.app",
  messagingSenderId: "453698757889",
  appId: "1:453698757889:web:283b90c2c77a8d62136700"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app