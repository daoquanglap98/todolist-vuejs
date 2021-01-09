import { firebase } from '@firebase/app';
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyBnIUl2-9A4Xht8lXkNChsZs6Opw28uH0Q",
    authDomain: "ql-todolist.firebaseapp.com",
    databaseURL: "https://ql-todolist-default-rtdb.firebaseio.com",
    projectId: "ql-todolist",
    storageBucket: "ql-todolist.appspot.com",
    messagingSenderId: "668963024611",
    appId: "1:668963024611:web:c1a5a35200a4a0c87edfd6",
    measurementId: "G-F6CZW1HTGE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();