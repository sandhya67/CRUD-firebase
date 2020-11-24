import  firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyDEm195TOmBlCOX0DpsvHP_qXTVYO-Zitw",
  authDomain: "react-crud-6baef.firebaseapp.com",
  databaseURL: "https://react-crud-6baef.firebaseio.com",
  projectId: "react-crud-6baef",
  storageBucket: "react-crud-6baef.appspot.com",
  messagingSenderId: "793078323704",
  appId: "1:793078323704:web:59cd9d000baa31280d1e0d"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();