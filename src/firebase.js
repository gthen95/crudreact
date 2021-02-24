import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyApVza4qMynrTtBzN0mi2mRYGj1YoiGkP0",
    authDomain: "crud-ced2f.firebaseapp.com",
    projectId: "crud-ced2f",
    storageBucket: "crud-ced2f.appspot.com",
    messagingSenderId: "959307053271",
    appId: "1:959307053271:web:4500cdaf336e27b272d892"
  }

  export const firebaseApp=firebase.initializeApp(firebaseConfig)