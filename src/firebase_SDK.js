// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjV5vtp0lCutwHNW3kHb4fHdrF58aU1es",
  authDomain: "linkdin-pro1.firebaseapp.com",
  projectId: "linkdin-pro1",
  storageBucket: "linkdin-pro1.appspot.com",
  messagingSenderId: "788286129861",
  appId: "1:788286129861:web:ccc89bb2873714487fd2ac",
  measurementId: "G-TDYB801VET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app) ;
