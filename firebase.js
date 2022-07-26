import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAi6iTiHKxO6g2IDNo1vek5jw7TlDU5SHQ",
    authDomain: "fir-a8532.firebaseapp.com",
    projectId: "fir-a8532",
    storageBucket: "fir-a8532.appspot.com",
    messagingSenderId: "617008360344",
    appId: "1:617008360344:web:7305ff27e6e8227b2ed9ed"
  };

  const app = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = app.firestore();

export default db;
