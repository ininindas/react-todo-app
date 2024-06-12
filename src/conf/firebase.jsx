import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrrD3qyfSPaY4oCZ0x_yXFGdpULxMsHBI",
  authDomain: "react-todo-app-fd696.firebaseapp.com",
  projectId: "react-todo-app-fd696",
  storageBucket: "react-todo-app-fd696.appspot.com",
  messagingSenderId: "1060572398004",
  appId: "1:1060572398004:web:ac07a0c381130e630b72e1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
