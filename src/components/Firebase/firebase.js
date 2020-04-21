import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import * as CONFIG from '../constants/firebase-config';

const config = {
  apiKey: CONFIG.API_KEY,
  authDomain: CONFIG.AUTH_DOMAIN,
  databaseURL: CONFIG.DATABASE_URL,
  projectId: CONFIG.PROJECT_ID,
  storageBucket: CONFIG.STORAGE_BUCKET,
  messagingSenderId: CONFIG.MESSAGING_SENDER_ID,
  appId: CONFIG.APP_ID,  
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.fstore = app.firestore();
  };

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  /**
   * @param {string} currentUser
   * @param {string} text
   */
  addNote = (currentUser, text) => {
    this.fstore.collection(`users/${currentUser}/notes`).add({text})
    .then(() => {
      console.log(currentUser + ' added a new note!');
    })
    .catch(error => {
      console.error('Error writing document: ', error);
    });
  };

  /**
   * @returns {array} currentUserNotes
   */
  getNotes = (currentUser) => {
    const currentUserNotes = [];
    this.fstore.collection(`users/${currentUser}/notes`).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        currentUserNotes.push(doc.data());
      });
    });
    return currentUserNotes;
  };
};


export default Firebase;