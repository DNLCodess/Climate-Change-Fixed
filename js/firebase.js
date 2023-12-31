import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC1tQV_CAXn0_RAjGYjsQsXx7BTnNVsWLk",
    authDomain: "blogging-website-62721.firebaseapp.com",
    projectId: "blogging-website-62721",
    storageBucket: "blogging-website-62721.appspot.com",
    messagingSenderId: "868185431024",
    appId: "1:868185431024:web:0e81bbdb3d7f87763c9b35"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);




//   import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);


//   let db = firebase.firestore();