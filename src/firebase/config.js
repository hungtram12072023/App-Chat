// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, addDoc, getDoc, query, where, doc, setDoc} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL31bsTSCmNc1ULMamS3935yEBHJphCZM",
  authDomain: "chat-app-mybase.firebaseapp.com",
  projectId: "chat-app-mybase",
  storageBucket: "chat-app-mybase.appspot.com",
  messagingSenderId: "766410403421",
  appId: "1:766410403421:web:da099cb5c53045170a67b4",
  measurementId: "G-TSQR8XMMCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const fbProvider = new FacebookAuthProvider();


export async function handleFacebookLogin() {
  try {
    const result = await signInWithPopup(auth, fbProvider);
    const user = result.user;

    // Kiểm tra xem người dùng đã có trong Firestore chưa
    const userRef = doc(db, 'usersApp', user.uid);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      // Nếu người dùng chưa có trong Firestore, thêm thông tin của họ vào
      await setDoc(userRef, {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: user.providerId,
      });
    }
  } catch (error) {
    console.error('Lỗi đăng nhập:', error);
    throw error;
  }
}
export { auth, db, fbProvider};
export default app;
