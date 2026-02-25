// Firebase SDK の読み込み
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// 城主が手に入れた秘鍵で初期化
firebase.initializeApp({
  apiKey: "AIzaSyCga8FPt2H_oUO6ZrHFrV-DXJfIhslEg0A",
  authDomain: "naoma-lab.firebaseapp.com",
  projectId: "naoma-lab",
  storageBucket: "naoma-lab.firebasestorage.app",
  messagingSenderId: "901572701169",
  appId: "1:901572701169:web:4f9d019af31f9e7dc4b250"
});

const messaging = firebase.messaging();

// バックグラウンド通知の受信設定（民がサイトを閉じている時用）
messaging.onBackgroundMessage((payload) => {
  console.log('受信中...', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon-192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
