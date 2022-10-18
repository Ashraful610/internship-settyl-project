import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCDHPonUv2SY4qD77-lnzjAR2D0VAMSf4Q",
  authDomain: "internship-settyl-project.firebaseapp.com",
  projectId: "internship-settyl-project",
  storageBucket: "internship-settyl-project.appspot.com",
  messagingSenderId: "450347106972",
  appId: "1:450347106972:web:802aa57325a1586d71e359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth