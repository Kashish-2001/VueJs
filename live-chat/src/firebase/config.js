import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD-GY8re7Fl1t6434ugMS8Gxe4VkqIQnVY",
  authDomain: "vue-firebase-9ae7a.firebaseapp.com",
  projectId: "vue-firebase-9ae7a",
  storageBucket: "vue-firebase-9ae7a.appspot.com",
  messagingSenderId: "22132048050",
  appId: "1:22132048050:web:4eb7257c8e2a03f37a49ab"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
