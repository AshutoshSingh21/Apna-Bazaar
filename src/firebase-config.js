// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyBQ_eQpDzq86c65fElfsFAaoCtkmodTdH8",

  authDomain: "apana-bazzar.firebaseapp.com",

  projectId: "apana-bazzar",

  storageBucket: "apana-bazzar.appspot.com",

  messagingSenderId: "82414857545",

  appId: "1:82414857545:web:8fd149e0955baeebfcfe98",

 measurementId: "G-DYMXN593S1"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app,auth };