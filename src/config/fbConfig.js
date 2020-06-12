import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyACX9Vecf5qzvWT3nGYRwGqO0GgUR5xl8w",
  authDomain: "project-plan-e77e1.firebaseapp.com",
  databaseURL: "https://project-plan-e77e1.firebaseio.com",
  projectId: "project-plan-e77e1",
  storageBucket: "project-plan-e77e1.appspot.com",
  messagingSenderId: "769765590303",
  appId: "1:769765590303:web:8932cc481664b2d2315c2a",
  measurementId: "G-NTCW9YLQ3P"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
