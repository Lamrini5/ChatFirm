import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlMhfIIidnebx_zbKF3clr6CEQn_v7__0",
  authDomain: "chat-firm.firebaseapp.com",
  databaseURL: "https://chat-firm-default-rtdb.firebaseio.com",
  projectId: "chat-firm",
  storageBucket: "chat-firm.appspot.com",
  messagingSenderId: "102384843224",
  appId: "1:102384843224:web:ca89eb90c21b335d86daad",
  measurementId: "G-0HB8VKERZ6"
};

firebase.initializeApp(firebaseConfig);

export default firebase;