// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH_dllnoEGUbQomqKkQ3JSl1YLiDJvTtg",
  authDomain: "monota-car.firebaseapp.com",
  projectId: "monota-car",
  storageBucket: "monota-car.appspot.com",
  messagingSenderId: "552465856441",
  appId: "1:552465856441:web:9083a904bc841546902868"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
