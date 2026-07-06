import  firebase  from "firebase/compat/app";
// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAo21ZNnvDz4Wb6QasQVWXoXr9SUEfoVBA",
  authDomain: "clone-6a704.firebaseapp.com",
  projectId: "clone-6a704",
  storageBucket: "clone-6a704.firebasestorage.app",
  messagingSenderId: "365158324179",
  appId: "1:365158324179:web:4b0285e544ae1e3fd3c126"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
    export const db = app.firestore();