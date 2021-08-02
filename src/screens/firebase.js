import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBbumCsyhGL5OR80L8qXM5FOlmT4DCmP_0",
    authDomain: "netflix-clone-6c394.firebaseapp.com",
    projectId: "netflix-clone-6c394",
    storageBucket: "netflix-clone-6c394.appspot.com",
    messagingSenderId: "1031537318800",
    appId: "1:1031537318800:web:08a7dbdbf3c48a1055f115"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {auth};
export default db;