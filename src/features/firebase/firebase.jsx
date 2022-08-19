import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDrwP_DDxGs69bxhTM-p9ov0hCo_3_yeYQ",
    authDomain: "chat-app-f5774.firebaseapp.com",
    projectId: "chat-app-f5774",
    storageBucket: "chat-app-f5774.appspot.com",
    messagingSenderId: "907867871834",
    appId: "1:907867871834:web:a44159b1155f11d3c19663"
  };

  export const fire = firebase.initializeApp(firebaseConfig)

  // console.log(fire)