// import firebase from "firebase/compat/app";
// // auth
// import { getAuth } from "firebase/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";

// import { initializeApp } from "firebase/app";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCigflp9l9aHeFa16balvLkfvOu6Eg0Rn8",
//   authDomain: "clone-a49a2.firebaseapp.com",
//   projectId: "clone-a49a2",
//   storageBucket: "clone-a49a2.appspot.com",
//   messagingSenderId: "967892494703",
//   appId: "1:967892494703:web:b482d9a8e7e64201cae09a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = app.firestore();


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCigflp9l9aHeFa16balvLkfvOu6Eg0Rn8",
  authDomain: "clone-a49a2.firebaseapp.com",
  projectId: "clone-a49a2",
  storageBucket: "clone-a49a2.appspot.com",
  messagingSenderId: "967892494703",
  appId: "1:967892494703:web:b482d9a8e7e64201cae09a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
