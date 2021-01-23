// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyChB_kyRpt0F5b0Y3DQvKKj7i-YL3im0pc",
    authDomain: "clone-c44d2.firebaseapp.com",
    projectId: "clone-c44d2",
    storageBucket: "clone-c44d2.appspot.com",
    messagingSenderId: "639327875558",
    appId: "1:639327875558:web:7a9dc12c592ee513f0a627",
    measurementId: "G-E7PYEGN5NK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

export  { db, auth };