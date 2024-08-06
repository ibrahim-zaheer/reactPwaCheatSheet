// import firebase from 'firebase';

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB2vsvTt8NZPOp63xvakXVLzh3RBWQcvWA",
//   authDomain: "pwa-app-d9acf.firebaseapp.com",
//   projectId: "pwa-app-d9acf",
//   storageBucket: "pwa-app-d9acf.appspot.com",
//   messagingSenderId: "718357169000",
//   appId: "1:718357169000:web:eac392e2141763722e0cdd",
//   measurementId: "G-PT1PV8X8X6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// export default firebase;




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getMessaging } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2vsvTt8NZPOp63xvakXVLzh3RBWQcvWA",
  authDomain: "pwa-app-d9acf.firebaseapp.com",
  projectId: "pwa-app-d9acf",
  storageBucket: "pwa-app-d9acf.appspot.com",
  messagingSenderId: "718357169000",
  appId: "1:718357169000:web:eac392e2141763722e0cdd",
  measurementId: "G-PT1PV8X8X6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const messaging = getMessaging(app);

export { app, analytics, auth, messaging };
