import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCOxKlh6W7PLJQIDlG4A0DxzOFo9TAgH9I",
  authDomain: "netflix-clone-9d075.firebaseapp.com",
  projectId: "netflix-clone-9d075",
  storageBucket: "netflix-clone-9d075.appspot.com",
  messagingSenderId: "687282592630",
  appId: "1:687282592630:web:d41cab16c146eb444c3857",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;
