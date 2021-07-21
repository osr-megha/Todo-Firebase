import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyBLcj972fTjg4PM9MeV2aAmMr4__ezixLY",
    authDomain: "todo-app-a20ac.firebaseapp.com",
    projectId: "todo-app-a20ac",
    storageBucket: "todo-app-a20ac.appspot.com",
    messagingSenderId: "219138438895",
    appId: "1:219138438895:web:8380da0c40dd2ec2ec0d1a"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db} ;