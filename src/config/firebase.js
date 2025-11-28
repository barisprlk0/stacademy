import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDk5Jbw3vJhRTYtrAs_ezGRuDjQn-4y8Bc",
  authDomain: "fir-course-f573c.firebaseapp.com",
  projectId: "fir-course-f573c",
  storageBucket: "fir-course-f573c.firebasestorage.app",
  messagingSenderId: "814454961142",
  appId: "1:814454961142:web:2dfe8a3580722ca9c10dd7",
  measurementId: "G-HQPNN73W07"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);