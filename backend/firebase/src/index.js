// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGQm1CEvkDLwHY4_EDT-x0y4oYs52NXlQ",
    authDomain: "tasker-b3a4e.firebaseapp.com",
    databaseURL: "https://tasker-b3a4e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tasker-b3a4e",
    storageBucket: "tasker-b3a4e.appspot.com",
    messagingSenderId: "391645949433",
    appId: "1:391645949433:web:9ff560719513fb0ba3e128",
    measurementId: "G-EFFR1ZL5H4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging();
// Add the public key generated from the console here.
messaging.getToken({ vapidKey: "BKWDRizWv7emqGofTn0ABZRW5xECUB01GHf6jKQ2KoeD5U1RKHhAo-u1-GdBBRneu2uhHqlVAzNxVW6L5wNoiaU" });
