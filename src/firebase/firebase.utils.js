import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCsK3cHweWnujD-pqNmkgpRuUSwiAWO9f4",
    authDomain: "crown-db-72758.firebaseapp.com",
    databaseURL: "https://crown-db-72758.firebaseio.com",
    projectId: "crown-db-72758",
    storageBucket: "crown-db-72758.appspot.com",
    messagingSenderId: "808583094176",
    appId: "1:808583094176:web:648b84f9f355198b564ec5",
    measurementId: "G-T5F0RVZ1GE"
  };


  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;