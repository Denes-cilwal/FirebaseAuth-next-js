import firebase from "firebase/app";
import * as Process from "process";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: Process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    authDomain: Process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: Process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: Process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: Process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: Process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: Process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialise firebase, if firebase instance doesn't exist
if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase;




