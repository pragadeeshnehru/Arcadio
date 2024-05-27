// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8TccAVt4jQ0Yl4rpg3_OUWNVLwAnBLrk",
  authDomain: "arcadio-7ae0e.firebaseapp.com",
  projectId: "arcadio-7ae0e",
  storageBucket: "arcadio-7ae0e.appspot.com",
  messagingSenderId: "463873009716",
  appId: "1:463873009716:web:302e19c958af65d36c4261",
  measurementId: "G-WCLWXHXWNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, provider };