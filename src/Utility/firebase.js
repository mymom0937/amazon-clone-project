import firebase from "firebase/compat/app";
// Auth setup
import { getAuth } from 'firebase/auth';
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6GlczN42OpGeqf4K5KhFthgRSIS_w3Gw",
  authDomain: "clone-project2-88390.firebaseapp.com",
  projectId: "clone-project2-88390",
  storageBucket: "clone-project2-88390.appspot.com",
  messagingSenderId: "212606342365",
  appId: "1:212606342365:web:eeb0868e8624e9fa357734",
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =app.firestore()
