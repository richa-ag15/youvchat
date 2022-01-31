import firebase from 'firebase/app';
import 'firebase/auth';





// export const auth  = firebase.initializeApp( {
//     apiKey: "AIzaSyB817e1nl-SOcUXuxPTVnBupxQR7K8GPfE",
//     authDomain: "youvchat.firebaseapp.com",
//     projectId: "youvchat",
//     storageBucket: "youvchat.appspot.com",
//     messagingSenderId: "899059903950",
//     appId: "1:899059903950:web:5d2c1651c99fd3bd3f4f9f"
//   }).auth(); 

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyB817e1nl-SOcUXuxPTVnBupxQR7K8GPfE",
    authDomain: "youvchat.firebaseapp.com",
    projectId: "youvchat",
    storageBucket: "youvchat.appspot.com",
    messagingSenderId: "899059903950",
    appId: "1:899059903950:web:5d2c1651c99fd3bd3f4f9f"
}).auth();