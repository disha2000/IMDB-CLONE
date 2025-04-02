// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDwF_4HaTrsYRCzxn7dISBI7LlcD6b01kc",
  authDomain: "imdb-clone-2ee25.firebaseapp.com",
  projectId: "imdb-clone-2ee25",
  storageBucket: "imdb-clone-2ee25.firebasestorage.app",
  messagingSenderId: "881327916879",
  appId: "1:881327916879:web:d004bac204bafc3a74e73a",
  measurementId: "G-KM1S5NVD1B"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

