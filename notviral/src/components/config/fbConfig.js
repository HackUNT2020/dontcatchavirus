import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyAEJgsIF6k9-XM9wt4nw4q28Z4q3MdSgcE",
    authDomain: "not-viral-c5f0a.firebaseapp.com",
    databaseURL: "https://not-viral-c5f0a.firebaseio.com",
    projectId: "not-viral-c5f0a",
    storageBucket: "not-viral-c5f0a.appspot.com",
    messagingSenderId: "558811291753",
    appId: "1:558811291753:web:1f1c35a4a24e52b8b9c2f8",
    measurementId: "G-X1WG8LELL7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;
