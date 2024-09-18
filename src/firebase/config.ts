import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDRla5UA-06nXKg9qqllxiXMrClNby9uqs",
  authDomain: "gerenciar-495b1.firebaseapp.com",
  projectId: "gerenciar-495b1",
  storageBucket: "gerenciar-495b1.appspot.com",
  messagingSenderId: "1078835640583",
  appId: "1:1078835640583:web:4a34d2e6ffbc7bbe36ada2"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };