import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAnuwoONjajc701oTcJ3uBpLmJqbKRBmqw",
  authDomain: "fate-shop.firebaseapp.com",
  databaseURL: "https://fate-shop.firebaseio.com",
  projectId: "fate-shop",
  storageBucket: "",
  messagingSenderId: "173396173325",
  appId: "1:173396173325:web:b8f159d5d4223c49"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const filestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
