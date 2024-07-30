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
  