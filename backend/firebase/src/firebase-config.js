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
  apiKey: "AIzaSyDIt_GIFvRJHpsSy4gRrdsrLuBn_GQxblE",
  authDomain: "friendlychat-ec912.firebaseapp.com",
  databaseURL: "https://friendlychat-ec912-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "friendlychat-ec912",
  storageBucket: "friendlychat-ec912.appspot.com",
  messagingSenderId: "321159238761",
  appId: "1:321159238761:web:7d40c6dd86105204e8fef8"
};
export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}