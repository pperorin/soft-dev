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
  apiKey: "AIzaSyDqYhe0XlnMuHVlcv5CfXlDDsrEGo2aHfE",
  authDomain: "tasker-firebase-fd836.firebaseapp.com",
  projectId: "tasker-firebase-fd836",
  storageBucket: "tasker-firebase-fd836.appspot.com",
  messagingSenderId: "21139621049",
  appId: "1:21139621049:web:85f977ba9c9858e7bb8768"
};
export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}