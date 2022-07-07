import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC8nt8FfERzxRv29n6Qu6hCday3cmSyQAs',
  authDomain: 'todoapp-29404.firebaseapp.com',
  projectId: 'todoapp-29404',
  storageBucket: 'todoapp-29404.appspot.com',
  messagingSenderId: '781480829413',
  appId: '1:781480829413:web:0195fc16cfb6dfdb804f0c',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
