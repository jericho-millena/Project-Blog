import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDt4GKeBiUUm0P5huxelUFVDbjhKVPJFJM',
  authDomain: 'myblog-23b89.firebaseapp.com',
  projectId: 'myblog-23b89',
  storageBucket: 'myblog-23b89.appspot.com',
  messagingSenderId: '240753796263',
  appId: '1:240753796263:web:7bfd258d4c74d64083e782'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { timestamp }
export default firebaseApp.firestore()
