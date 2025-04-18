// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXCUVe43qi1sXa9MeYjxNica_mrylumYg",
  authDomain: "do-keenan-final.firebaseapp.com",
  projectId: "do-keenan-final",
  storageBucket: "do-keenan-final.firebasestorage.app",
  messagingSenderId: "416708817663",
  appId: "1:416708817663:web:318c624639b64cc36252ca",
  measurementId: "G-D4L5W1HXND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;