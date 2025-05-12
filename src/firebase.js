import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyChxsIzXguWb5Ie1AeVYsJdAPtN5zRQqCc",
    authDomain: "solidariza-cg.firebaseapp.com",
    projectId: "solidariza-cg",
    storageBucket: "solidariza-cg.firebasestorage.app",
    messagingSenderId: "215243460848",
    appId: "1:215243460848:web:84e9ab2cc9f25e2cb53235",
    measurementId: "G-Q6DXNTY2Q3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };