import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 確保這行有引入

const firebaseConfig = {
  apiKey: "AIzaSyCPM6djPYyZ_zMyf8fJ2qRnayHnLXIj-NE",
  authDomain: "machine-45f27.firebaseapp.com",
  projectId: "machine-45f27",
  storageBucket: "machine-45f27.firebasestorage.app",
  messagingSenderId: "576671716540",
  appId: "1:576671716540:web:429d8ad780dfddfd2c2cb9",
  measurementId: "G-2874L084WT"
};
const app = initializeApp(firebaseConfig);

// ▼▼▼ 關鍵在這裡！一定要有 export ▼▼▼
export const db = getFirestore(app);
