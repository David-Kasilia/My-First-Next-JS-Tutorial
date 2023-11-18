// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4y_k0ESWH_S2PpaDA8Iz5rNueCLlR1S8",
  authDomain: "promptverse-333e1.firebaseapp.com",
  projectId: "promptverse-333e1",
  storageBucket: "promptverse-333e1.appspot.com",
  messagingSenderId: "3377632703",
  appId: "1:3377632703:web:1914ae42909cb6efacbd0a",
  measurementId: "G-M40ZQGLFDQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
