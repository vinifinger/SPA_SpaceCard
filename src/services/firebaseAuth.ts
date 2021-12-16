import { initializeApp } from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';
import serviceAccount from '../utils/serviceAccountKey';
console.log(serviceAccount)
initializeApp(JSON.parse(JSON.stringify(serviceAccount)));

export default firebaseAuth;