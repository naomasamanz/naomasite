importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-app-sw.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging-sw.js');

firebase.initializeApp({
  apiKey: "AIzaSyCga8FPt2H_oUO6ZrHFrV-DXJfIhslEg0A",
  authDomain: "naoma-lab.firebaseapp.com",
  projectId: "naoma-lab",
  storageBucket: "naoma-lab.firebasestorage.app",
  messagingSenderId: "901572701169",
  appId: "1:901572701169:web:4f9d019af31f9e7dc4b250"
});

const messaging = firebase.messaging();

// 背景で通知を受け取った時の最低限の守護術式
messaging.onBackgroundMessage((payload) => {
  console.log('[sw.js] 宣告を受信せり：', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon-512.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
