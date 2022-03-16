 // import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
  import { addDoc,getFirestore,collection } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDy1RCwT3Di_T3tXS7JI2D_s_3FbaGo_es",
    authDomain: "crud-2b235.firebaseapp.com",
    projectId: "crud-2b235",
    storageBucket: "crud-2b235.appspot.com",
    messagingSenderId: "641847416192",
    appId: "1:641847416192:web:29ca0810e4a31498c4dd65"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore()
  


  export const saveTask  = (title, description) => {
    console.log(title,description)
  }