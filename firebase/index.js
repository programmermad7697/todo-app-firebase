import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6RyPfzaH4w9dM17NBNvAjPkuoCnSY6c4",
  authDomain: "todo-build-app.firebaseapp.com",
  projectId: "todo-build-app",
  storageBucket: "todo-build-app.appspot.com",
  messagingSenderId: "413832299255",
  appId: "1:413832299255:web:0fb09b6c4135fc506c09f2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
