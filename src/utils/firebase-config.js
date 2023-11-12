import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDG397dVsi9yLaYGNnp46Jcf1j_MY-kJH4",
  authDomain: "react-netflix-clone-54ddb.firebaseapp.com",
  projectId: "react-netflix-clone-54ddb",
  storageBucket: "react-netflix-clone-54ddb.appspot.com",
  messagingSenderId: "313811796750",
  appId: "1:313811796750:web:8e6f62ba1760218d75cd5f",
  measurementId: "G-E6JSGVBS9T"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);