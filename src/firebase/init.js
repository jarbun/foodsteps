import firebase from 'firebase'
import 'firebase/firestore'
import config from './config'

export default firebase.initializeApp(config).firestore()
