import { initializeApp } from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';
import serviceAccount from '../utils/serviceAccountKey';
initializeApp(JSON.parse(JSON.stringify(serviceAccount)));

export default firebaseAuth;