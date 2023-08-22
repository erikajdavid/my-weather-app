// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3wDfZ8DDcFik6YXLLO43hs720M_rwnKI",
  authDomain: "weather-app-auth-7eb3c.firebaseapp.com",
  projectId: "weather-app-auth-7eb3c",
  storageBucket: "weather-app-auth-7eb3c.appspot.com",
  messagingSenderId: "594431372314",
  appId: "1:594431372314:web:bb1177446d99ac990335a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

