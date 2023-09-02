import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC3wDfZ8DDcFik6YXLLO43hs720M_rwnKI",
  authDomain: "weather-app-auth-7eb3c.firebaseapp.com",
  projectId: "weather-app-auth-7eb3c",
  storageBucket: "weather-app-auth-7eb3c.appspot.com",
  messagingSenderId: "594431372314",
  appId: "1:594431372314:web:bb1177446d99ac990335a3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
export const dbRef = ref(database);

