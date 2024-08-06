importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB2vsvTt8NZPOp63xvakXVLzh3RBWQcvWA",
  authDomain: "pwa-app-d9acf.firebaseapp.com",
  projectId: "pwa-app-d9acf",
  storageBucket: "pwa-app-d9acf.appspot.com",
  messagingSenderId: "718357169000",
  appId: "1:718357169000:web:eac392e2141763722e0cdd",
  measurementId: "G-PT1PV8X8X6"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
