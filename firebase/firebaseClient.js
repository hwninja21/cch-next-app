import firebaseClient from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
/*

Copy/paste your *client-side* Firebase credentials below. 

To get these, go to the Firebase Console > open your project > Gear Icon >
Project Settings > General > Your apps. If you haven't created a web app
already, click the "</>" icon, name your app, and copy/paste the snippet.
Otherwise, go to Firebase SDK Snippet > click the "Config" radio button >
copy/paste.

*/
const CLIENT_CONFIG = {
  apiKey: "AIzaSyBWo2ksPDyYd22P09oZmntQqhEQtchhxGg",
  authDomain: "cachyio.firebaseapp.com",
  projectId: "cachyio",
  storageBucket: "cachyio.appspot.com",
  messagingSenderId: "693562396153",
  appId: "1:693562396153:web:087575ebf854da0f130128",
  measurementId: "G-0FFP7YR9W3"
};

if (typeof window !== "undefined" && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(CLIENT_CONFIG);
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.LOCAL);
  window.firebase = firebaseClient;
}

export { firebaseClient };
