import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBlrACGGKNBxiPCAeLVtlJIWwji_ns9jLU",
    authDomain: "e-ride-ebd63.firebaseapp.com",
    projectId: "e-ride-ebd63",
    storageBucket: "e-ride-ebd63.appspot.com",
    messagingSenderId: "548258747602",
    appId: "1:548258747602:web:3d39d45972b112a66c090b"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
