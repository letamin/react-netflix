import Firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// import { seedDatabase } from "../seed";

const config = {
    apiKey: "AIzaSyB2OzijDduE218gHmhvBEw6LhhcEqWDpk0",
    authDomain: "netflix-2f2e8.firebaseapp.com",
    projectId: "netflix-2f2e8",
    storageBucket: "netflix-2f2e8.appspot.com",
    messagingSenderId: "53067531904",
    appId: "1:53067531904:web:271f3f60d7b08b728e4865"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };