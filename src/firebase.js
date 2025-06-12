// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // necessário para o Firestore

const firebaseConfig = {
  apiKey: "AIzaSyChxsIzXguWb5Ie1AeVYsJdAPtN5zRQqCc",
  authDomain: "solidariza-cg.firebaseapp.com",
  projectId: "solidariza-cg",
  storageBucket: "solidariza-cg.firebasestorage.app",
  messagingSenderId: "215243460848",
  appId: "1:215243460848:web:84e9ab2cc9f25e2cb53235",
  measurementId: "G-Q6DXNTY2Q3"
};

// Inicializa o app Firebase
const app = initializeApp(firebaseConfig);

// Autenticação e Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Exporte ambos os serviços corretamente
export { auth, db };
