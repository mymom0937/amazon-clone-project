// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase ";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCe4nhyT-J6_bO_y9aqVuTu-4ZruSbaLWo",
  authDomain: "clone-project-1777b.firebaseapp.com",
  projectId: "clone-project-1777b",
  storageBucket: "clone-project-1777b.appspot.com",
  messagingSenderId: "1070491904256",
  appId: "1:1070491904256:web:dbe614c26e44e64134abe5",
  measurementId: "G-1KNX93WLJL",
};

// ********
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
// *****

