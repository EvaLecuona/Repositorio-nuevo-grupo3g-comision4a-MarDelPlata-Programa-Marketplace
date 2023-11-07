import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyCcIg5k2AVDlEs-75rMe2DJ6aPpje9c_8k",
    authDomain: "lateral-shift-365516.firebaseapp.com",
    projectId: "lateral-shift-365516",
    storageBucket: "lateral-shift-365516.appspot.com",
    messagingSenderId: "231827123281",
    appId: "1:231827123281:web:dfc18aee218468996fdc70",
    measurementId: "G-C775LCRWTS"
  };

 
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
