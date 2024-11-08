import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_N9ZAkCKbmw8lpEnheDBlX98pcQHjXtc",
  authDomain: "apache-petshop.firebaseapp.com",
  projectId: "apache-petshop",
  storageBucket: "apache-petshop.appspot.com",
  messagingSenderId: "170383273785",
  appId: "1:170383273785:web:912d4113cd21693e4f42e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;