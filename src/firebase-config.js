// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"; // 코드 추가




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1LzcTljWqFuzGVd2hWfxXBfTv_U2uxgo",
  authDomain: "testpage-ca8a8.firebaseapp.com",
  projectId: "testpage-ca8a8",
  storageBucket: "testpage-ca8a8.appspot.com",
  messagingSenderId: "646621375160",
  appId: "1:646621375160:web:1501754cedde416956e24d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // 코드 추가

