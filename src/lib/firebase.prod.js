import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

//config
const config = {
    apiKey: "AIzaSyCi5DZtCco5Pe3gegzHi0AUAJ9YLkjGoiY",
    authDomain: "netflix-clone-6573e.firebaseapp.com",
    projectId: "netflix-clone-6573e",
    storageBucket: "netflix-clone-6573e.appspot.com",
    messagingSenderId: "300044501343",
    appId: "1:300044501343:web:9553d7022fbd61df29b6ea",
}

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// (ALREADY EXPORTED DATA, DONT USE AGIN ~ABHISHEK)seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };