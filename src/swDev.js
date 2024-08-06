export default function swDev() {
    function urlBase64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
      const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);
      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    }
  
    function determineAppServerKey() {
      const validPublicKey = "BH0WBXA6HLq8kxSxB3Wmt5PTexCipR15lsTJSL2ja3-r8Ea48XUFNHXK-NyFbpxWmYleORk1w24l4-K4boLyGBY";
      return urlBase64ToUint8Array(validPublicKey);
    }
  
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  
    navigator.serviceWorker.register(swUrl).then((response) => {
      console.warn("response", response);
      response.pushManager.getSubscription().then((subscription) => {
        if (!subscription) {
          response.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: determineAppServerKey(),
          });
        }
      });
    });
  }
  

// export default function swDev() {
//   function urlBase64ToUint8Array(base64String) {
//     const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
//     const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
//     const rawData = window.atob(base64);
//     const outputArray = new Uint8Array(rawData.length);
//     for (let i = 0; i < rawData.length; ++i) {
//       outputArray[i] = rawData.charCodeAt(i);
//     }
//     return outputArray;
//   }

//   function determineAppServerKey() {
//     const validPublicKey = "BH0WBXA6HLq8kxSxB3Wmt5PTexCipR15lsTJSL2ja3-r8Ea48XUFNHXK-NyFbpxWmYleORk1w24l4-K4boLyGBY";
//     return urlBase64ToUint8Array(validPublicKey);
//   }

//   let swUrl = `${process.env.PUBLIC_URL}/sw.js`;

//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register(swUrl).then((registration) => {
//       console.log("Service Worker registered with scope:", registration.scope);

//       // Check notification permission status
//       if (Notification.permission === 'granted') {
//         subscribeUserToPush(registration);
//       } else if (Notification.permission === 'default') {
//         Notification.requestPermission().then((permission) => {
//           if (permission === 'granted') {
//             subscribeUserToPush(registration);
//           } else {
//             console.error("Notifications permission denied.");
//           }
//         });
//       } else {
//         console.error("Notifications are blocked by the user.");
//       }
//     }).catch((error) => {
//       console.error("Service Worker registration failed:", error);
//     });
//   } else {
//     console.error("Service Worker is not supported in this browser.");
//   }

//   function subscribeUserToPush(registration) {
//     registration.pushManager.getSubscription().then((subscription) => {
//       if (!subscription) {
//         console.log("No subscription found, subscribing...");
//         registration.pushManager.subscribe({
//           userVisibleOnly: true,
//           applicationServerKey: determineAppServerKey(),
//         }).then((newSubscription) => {
//           console.log("New subscription:", newSubscription);
//           // Here you should send the new subscription to your server to save it
//         }).catch((err) => {
//           console.error("Failed to subscribe:", err);
//         });
//       } else {
//         console.log("Already subscribed:", subscription);
//       }
//     }).catch((error) => {
//       console.error("Failed to get subscription:", error);
//     });
//   }
// }
