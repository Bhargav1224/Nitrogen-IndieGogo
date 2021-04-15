import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCT2-7o77CKZ06SN63c_i8gvYNwXUfhAas",
  authDomain: "indiegogo-masai.firebaseapp.com",
  projectId: "indiegogo-masai",
  storageBucket: "indiegogo-masai.appspot.com",
  messagingSenderId: "482783406649",
  appId: "1:482783406649:web:cdff67e90060013644fbe8",
};

export const fire = firebase.initializeApp(firebaseConfig);
