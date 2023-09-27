// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6sxa_7AM8-M8aKeGhfR3qLnb5KiHmcSc",
  authDomain: "dragon-hot-news.firebaseapp.com",
  projectId: "dragon-hot-news",
  storageBucket: "dragon-hot-news.appspot.com",
  messagingSenderId: "612476926854",
  appId: "1:612476926854:web:2e683aa945d785dd4e0a07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;