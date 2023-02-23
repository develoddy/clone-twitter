// import firebase from "firebase/app";
// import firestore from "firebase/firestore";
// import "firebase/storage";

// // npm install -g firebase-tools

//   var firebaseConfig = {
//     apiKey: "AIzaSyDglh_tPJzN3-MX8jR_tYxlS3JkeRKey9o",
//     authDomain: "twitter-1e01a.firebaseapp.com",
//     projectId: "twitter-1e01a",
//     storageBucket: "twitter-1e01a.appspot.com",
//     messagingSenderId: "194097898590",
//     appId: "1:194097898590:web:b5e5436bb6896d7812c0cf",
//     measurementId: "G-08L43TZL33"
//   };

//   // Initialize Firebase
//   const fb = firebase.initializeApp(firebaseConfig);

//   export const db = fb.firestore()

//   const storage = firebase.storage()

//   export { storage, firebase as default }

// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY ,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET ,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const storage = db.storage;


//export default db;

export { storage, db as default }
