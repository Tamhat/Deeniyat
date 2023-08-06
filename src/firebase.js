import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnPt91TjjsLhBVMzbffj2-CLkgsiJode4",
  authDomain: "auth-deeniyat.firebaseapp.com",
  databaseURL: "https://auth-deeniyat-default-rtdb.firebaseio.com",
  projectId: "auth-deeniyat",
  storageBucket: "auth-deeniyat.appspot.com",
  messagingSenderId: "657329810878",
  appId: "1:657329810878:web:e72300aff592ba9f135def",
  measurementId: "G-9TZZ583F9L"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LeC3H4nAAAAAJw_EoRfCIZidePNdGS07GFIjPr8'), // Replace with your ReCAPTCHA site key
  isTokenAutoRefreshEnabled: true,
}
);
//console.log(appCheck)
const db = firebase.firestore(app);

export const fetchUserData = async (userId) => {
  try {
    const userRef = db.collection("users").doc(userId);
    console.log(db.collection("users").doc(userId))
    const userDoc = await userRef.get();

    if (userDoc.exists) {
      return userDoc.data();
    } else {
      return null;
    }
  } catch (error) {
    console.log("Error fetching user data:", error);
    throw error;
  }
};


export { db };
export const auth = getAuth(app);
export default app;
