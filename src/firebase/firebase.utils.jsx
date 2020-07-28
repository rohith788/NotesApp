import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBJOmt_gV4CpnC9ghcJQXZOv_GfOQujjZY",
    authDomain: "keeps-clone.firebaseapp.com",
    databaseURL: "https://keeps-clone.firebaseio.com",
    projectId: "keeps-clone",
    storageBucket: "keeps-clone.appspot.com",
    messagingSenderId: "731924019159",
    appId: "1:731924019159:web:7eb0c6064f2933c0407d92",
    measurementId: "G-HLYG1R95YE"
})

const db = firebaseApp.firestore()

export { db }