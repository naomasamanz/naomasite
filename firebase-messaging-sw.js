// 1. Firebaseの魔導書を召喚
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// 2. 帝国の刻印（初期化）
firebase.initializeApp({
  apiKey: "AIzaSyCga8FPt2H_oUO6ZrHFrV-DXJfIhslEg0A",
  authDomain: "naoma-lab.firebaseapp.com",
  projectId: "naoma-lab",
  storageBucket: "naoma-lab.firebasestorage.app",
  messagingSenderId: "901572701169",
  appId: "1:901572701169:web:4f9d019af31f9e7dc4b250"
});

const messaging = firebase.messaging();

// 3. PWAとしての基本機能を継承
self.addEventListener('install', (event) => {
  console.log('真の門番（Firebase対応版）: インストール完了');
});

self.addEventListener('fetch', (event) => {
  // ここは空でも門番の職務は果たせます
});

// 4. 背景での通知受信を司る最重要術式
messaging.onBackgroundMessage((payload) => {
  console.log('[sw.js] 宣告を受信せり：', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon-512.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
