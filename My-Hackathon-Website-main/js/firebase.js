import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCQzjr7gE62YZKTki7hgNfejP0bNngiOBc",
  authDomain: "my-hackathon-website.firebaseapp.com",
  projectId: "my-hackathon-website",
  storageBucket: "my-hackathon-website.appspot.com",
  messagingSenderId: "268462690748",
  appId: "1:268462690748:web:92bb6b14d0fdc502995bb9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, db, storage };