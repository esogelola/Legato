// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import firebaseConfig from "./config/firebase_config.json";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
type firebaseConfigTypes = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};
function initializeFirebase(config: firebaseConfigTypes): boolean {
  try {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    console.log({ success: "Firebase has been initialized" });
  } catch (error) {
    console.log({ error });
    return false;
  }

  return true;
}

const firebaseInitialize = initializeFirebase(firebaseConfig);
