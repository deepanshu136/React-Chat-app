// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
 import{getFirestore} from'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp6186Sycd2JKuJNNIPCm5hCmN5e2nRLE",
  authDomain: "chat-7dc22.firebaseapp.com",
  projectId: "chat-7dc22",
  storageBucket: "chat-7dc22.appspot.com",
  messagingSenderId: "377826458703",
  appId: "1:377826458703:web:7558a492b6b64314173e3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);