// 最新のSDKを確実に召喚する術式
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyCga8FPt2H_oUO6ZrHFrV-DXJfIhslEg0A",
  authDomain: "naoma-lab.firebaseapp.com",
  projectId: "naoma-lab",
  storageBucket: "naoma-lab.firebasestorage.app",
  messagingSenderId: "901572701169",
  appId: "1:901572701169:web:4f9d019af31f9e7dc4b250"
});

const messaging = firebase.messaging();

// 背景での受信設定（これがないと評価エラーになることがあります）
messaging.onBackgroundMessage((payload) => {
  console.log('[sw.js] 宣告を受信：', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon-512.png' // アイコンがない場合はこの行を消しても可
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
