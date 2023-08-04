
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyASUU6d7p0KBe5BZhy9WMo8B62qHDlo5Rc",
  authDomain: "clone-a62d9.firebaseapp.com",
  projectId: "clone-a62d9",
  storageBucket: "clone-a62d9.appspot.com",
  messagingSenderId: "727525163462",
  appId: "1:727525163462:web:13beb378c170a4d32eb2c7",
  measurementId: "G-Z1J5ESK6T1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig
