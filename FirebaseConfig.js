// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj1SB6NoubYuLy7Ly8DTfHQ2McetKR2U4",
  authDomain: "otprn-8728e.firebaseapp.com",
  projectId: "otprn-8728e",
  storageBucket: "otprn-8728e.appspot.com",
  messagingSenderId: "605240990463",
  appId: "1:605240990463:web:62eb6f475b4ac0fe180aca",
  measurementId: "G-2FX8LD7SXF"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);