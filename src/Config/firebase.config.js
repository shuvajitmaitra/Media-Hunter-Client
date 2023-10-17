// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASovQgj10mA12rS5yQI-fUtTk4m4c7s1k",
    authDomain: "media-hunter-io.firebaseapp.com",
    projectId: "media-hunter-io",
    storageBucket: "media-hunter-io.appspot.com",
    messagingSenderId: "715447662548",
    appId: "1:715447662548:web:e9bf629ad4220c1198c841"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;