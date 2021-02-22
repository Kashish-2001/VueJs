import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD-GY8re7Fl1t6434ugMS8Gxe4VkqIQnVY",
  authDomain: "vue-firebase-9ae7a.firebaseapp.com",
  projectId: "vue-firebase-9ae7a",
  storageBucket: "vue-firebase-9ae7a.appspot.com",
  messagingSenderId: "22132048050",
  appId: "1:22132048050:web:699d23c527fc88767a49ab"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// export firestore
export { projectFirestore, timestamp }
