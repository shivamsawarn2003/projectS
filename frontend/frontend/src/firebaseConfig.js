import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBL7ME-B-jXEQhRfKI1Y9H43cS5eKnskas",
  authDomain: "projects-eb34c.firebaseapp.com",
  projectId: "projects-eb34c",
  storageBucket: "projects-eb34c.appspot.com",
  messagingSenderId: "527366191773",
  appId: "1:527366191773:web:597db4ed090e3c84dbb274",
  measurementId: "G-5JQCG1CSCB",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
