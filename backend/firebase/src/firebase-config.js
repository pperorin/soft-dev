/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyDGQm1CEvkDLwHY4_EDT-x0y4oYs52NXlQ",
  authDomain: "tasker-b3a4e.firebaseapp.com",
  databaseURL: "https://tasker-b3a4e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tasker-b3a4e",
  storageBucket: "tasker-b3a4e.appspot.com",
  messagingSenderId: "391645949433",
  appId: "1:391645949433:web:9ff560719513fb0ba3e128",
  measurementId: "G-EFFR1ZL5H4"
};
export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}