
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDJFmTlVcP2zFQCdxTr8ia_mTm2UEazQrk",
  authDomain: "ecommercenike2.firebaseapp.com",
  projectId: "ecommercenike2",
  storageBucket: "ecommercenike2.firebasestorage.app",
  messagingSenderId: "430236507827",
  appId: "1:430236507827:web:54f1cb4c5920e354895ac6"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;