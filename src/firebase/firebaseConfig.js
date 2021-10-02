import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDwyekQQVCGQKewAattm60sLjK2zIe9iQA",
    authDomain: "matrimonios-be8b1.firebaseapp.com",
    projectId: "matrimonios-be8b1",
    storageBucket: "matrimonios-be8b1.appspot.com",
    messagingSenderId: "802901962944",
    appId: "1:802901962944:web:fa85c8dadae1c8e3f83d25"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  export default db;