import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCWPGdmXbaHkGUKTY9DRxpoMq24J2MdlyA",
  authDomain: "dellapastatienda-d2349.firebaseapp.com",
  projectId: "dellapastatienda-d2349",
  storageBucket: "dellapastatienda-d2349.appspot.com",
  messagingSenderId: "430945681243",
  appId: "1:430945681243:web:8d11d8fb3523c6c281647e"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);