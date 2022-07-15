import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAsqVcfgoOOKX7gApvSludd2v76OSTZWg8',
  authDomain: 'chat-app-d871c.firebaseapp.com',
  projectId: 'chat-app-d871c',
  storageBucket: 'chat-app-d871c.appspot.com',
  messagingSenderId: '151016932359',
  appId: '1:151016932359:web:f4aed906ed5287a4aad6a2',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {auth, db};
