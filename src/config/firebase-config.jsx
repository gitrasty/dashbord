// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
   getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL51JTkw9ZOYnipwcajNlrZGpzSPMFao8",
  authDomain: "react-dashbord-bf290.firebaseapp.com",
  projectId: "react-dashbord-bf290",
  storageBucket: "react-dashbord-bf290.firebasestorage.app",
  messagingSenderId: "808356112988",
  appId: "1:808356112988:web:f425569c0dd974d69d9499"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);