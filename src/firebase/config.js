import firebase from 'firebase/app';
import 'firebase/storage';
import '@firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyB20869DGXnQ7noHX6wlDetl__q5_RXBl4",
  authDomain: "react-a55af.firebaseapp.com",
  databaseURL: "https://react-a55af-default-rtdb.firebaseio.com",
  projectId: "react-a55af",
  storageBucket: "react-a55af.appspot.com",
  messagingSenderId: "593210627829",
  appId: "1:593210627829:web:446af0d3adf970b2d8d7bc"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {storage , firestore,timestamp};