// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDo7JgGIt4wScyn8CelPKvQGEwVwTowtCI",
  authDomain: "react-login-listed.firebaseapp.com",
  projectId: "react-login-listed",
  storageBucket: "react-login-listed.appspot.com",
  messagingSenderId: "566504979759",
  appId: "1:566504979759:web:d506e9830819217d8cb5da",
  measurementId: "G-C8BG9TEBTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};