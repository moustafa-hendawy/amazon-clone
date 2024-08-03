// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCSs2g9scCiHiWLmoZJxaebU6MW5m0JDN0",
    authDomain: "challenge-81c50.firebaseapp.com",
    projectId: "challenge-81c50",
    storageBucket: "challenge-81c50.appspot.com",
    messagingSenderId: "863332028537",
    appId: "1:863332028537:web:019102c209ba453449c4a8",
    measurementId: "G-HFTHQE204V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const auth = getAuth(app);

export { auth, db };
