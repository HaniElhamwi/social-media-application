import firebase from "firebase/compat/app";
import  "firebase/compat/storage";  

const firebaseConfig = {
  apiKey: "AIzaSyD2rRvYGlGB2KobpozsXAt9NNldzaY1e6g",
  authDomain: "fire-base-upload-image.firebaseapp.com",
  projectId: "fire-base-upload-image",
  storageBucket: "fire-base-upload-image.appspot.com",
  messagingSenderId: "928013052420",
  appId: "1:928013052420:web:0724caacbb529ec8b82351",
  measurementId: "G-03RW0K0HW6",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
