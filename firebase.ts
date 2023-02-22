import { initializeApp,getApps,getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDxJ1nl1JdDEdC1F_Qzt0CO8l5WT-NZi9E",
  authDomain: "chatgpt-clone-e3f9d.firebaseapp.com",
  projectId: "chatgpt-clone-e3f9d",
  storageBucket: "chatgpt-clone-e3f9d.appspot.com",
  messagingSenderId: "634593918676",
  appId: "1:634593918676:web:7d0e0743a268e5d9edc541"
};

// Initialize Firebase
const app = getApps().length?getApp():initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}