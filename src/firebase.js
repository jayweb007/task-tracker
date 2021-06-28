// import firebase from "firebase";

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyCxfwRzG2dZlOkMIAeOZTcJcroRsbimnec",
//   authDomain: "task-tracker-83bcb.firebaseapp.com",
//   projectId: "task-tracker-83bcb",
//   storageBucket: "task-tracker-83bcb.appspot.com",
//   messagingSenderId: "579617438518",
//   appId: "1:579617438518:web:7077933a8bb66ff53dd197",
//   measurementId: "G-M6526KQYYP",
// });

// const db = firebaseApp.firestore();
// // const auth = firebase.auth();
// // const storage = firebase.storage();

// // export { db, auth, storage };

// export default db;

import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxfwRzG2dZlOkMIAeOZTcJcroRsbimnec",
  authDomain: "task-tracker-83bcb.firebaseapp.com",
  projectId: "task-tracker-83bcb",
  storageBucket: "task-tracker-83bcb.appspot.com",
  messagingSenderId: "579617438518",
  appId: "1:579617438518:web:7077933a8bb66ff53dd197",
  measurementId: "G-M6526KQYYP",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
