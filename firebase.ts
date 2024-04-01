import { getApps, initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDekdXELopFBnQBSOpzyKOdlfV8QwTuy9Q",
  authDomain: "dropbox-bec1b.firebaseapp.com",
  projectId: "dropbox-bec1b",
  storageBucket: "dropbox-bec1b.appspot.com",
  messagingSenderId: "685848471410",
  appId: "1:685848471410:web:7eceae69a44f6dc335dfeb"
};

// Initialize Firebase

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app);

export {db, storage}

