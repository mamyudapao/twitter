import { initializeApp } from "firebase/app";
import { getAnalytics } from "@firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBof9GKnR9QGtyIRf_rKir2zl_cJhfCCS0",
  authDomain: "twitter-4d29c.firebaseapp.com",
  projectId: "twitter-4d29c",
  storageBucket: "twitter-4d29c.appspot.com",
  messagingSenderId: "1093918513410",
  appId: "1:1093918513410:web:b0c4cefef98bcb86478a1b",
  measurementId: "G-LK87CVF6HC",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
