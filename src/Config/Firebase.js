import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/auth"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDmtpCDxqLSCSMpurXVXD08iHTCH8RXlu4",
    authDomain: "e-commerce-site-4ad57.firebaseapp.com",
    projectId: "e-commerce-site-4ad57",
    storageBucket: "e-commerce-site-4ad57.appspot.com",
    messagingSenderId: "883444999167",
    appId: "1:883444999167:web:f5bb1994418b10ce7ebdca",
    measurementId: "G-DMDD1M8LYZ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db= firebase.firestore();
  export const storage= firebase.storage();
  export const auth = firebase.auth();

