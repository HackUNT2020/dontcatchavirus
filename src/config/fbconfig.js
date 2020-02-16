// Your web app's Firebase configuration


import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAycPHBz5Pm_WjRMeX33cz-qC_Tq5c7mrU",
    authDomain: "notvir-6276a.firebaseapp.com",
    databaseURL: "https://notvir-6276a.firebaseio.com",
    projectId: "notvir-6276a",
    storageBucket: "notvir-6276a.appspot.com",
    messagingSenderId: "779455903185",
    appId: "1:779455903185:web:5d4890bb129491210b5cf0",
    measurementId: "G-3TNEKE0LVV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

;

  export default firebase