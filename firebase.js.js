// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ▼▼▼ 把這裡換成你剛剛在 Firebase 複製的那一串 ▼▼▼
const firebaseConfig = {
  apiKey: "AIzaSyDxxxx...",
  authDomain: "xxxx.firebaseapp.com",
  projectId: "xxxx",
  storageBucket: "xxxx.appspot.com",
  messagingSenderId: "xxxx",
  appId: "xxxx"
};
// ▲▲▲▲▲▲

// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// 匯出資料庫功能讓 App.jsx 使用
export const db = getFirestore(app);