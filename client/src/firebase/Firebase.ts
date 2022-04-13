// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth, // authentication 설정
  signInWithPopup, //google 로그인을 팝업창에 띄우기 위해
  GoogleAuthProvider, //google login 기능
  signInWithEmailAndPassword, // email 로그인
  createUserWithEmailAndPassword, //email 회원가입
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

const firebaseConfig: any = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APP_FIREBASE_APPID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signupEmail = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const loginGoogle = () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      credential?.accessToken;
    })
    .catch((error) => {
      GoogleAuthProvider.credentialFromError(error);
    });
};

export const setLoginState = () => {
  return setPersistence(auth, browserSessionPersistence);
};

export const checkLogin = () => {
  return auth.currentUser;
};

export const userLogOut = () => {
  return auth.signOut();
};
