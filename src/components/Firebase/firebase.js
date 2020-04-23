import firebase from 'firebase/app';
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
    firebase.initializeApp(config);

    this.auth = firebase.auth();
    this.fstore = firebase.firestore();
  };

  /**
   * @param {string} email
   * @param {string} password
   */
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  /**
   * @param {string} email
   * @param {string} password
   */
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut()

  /**
   * @param {string} currentUser
   * @param {string} text
   */
  addNote = (currentUser, text) =>
    this.fstore.collection(`users/${currentUser}/notes`).add({text})

  /**
   * @param {string} currentUser
   * @returns {array} currentUserNotes
   */
  getUserNotes = (currentUser) => {
    const currentUserNotes = [];
    this.fstore.collection(`users/${currentUser}/notes`).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const userNote = {
          text: doc.data().text,
          id: doc.id
        }
        currentUserNotes.push(userNote);
      });
    });
    return currentUserNotes;
  };

  /**
   * @param {string} currentUser
   * @param {string} noteId
   */
  deleteNote = (currentUser, noteId) =>
    this.fstore.collection(`users/${currentUser}/notes`).doc(noteId).delete()

  /**
   * @param {string} currentUser
   * @param {string} noteId
   * @param {string} updateText
   */
  updateNote = (currentUser, noteId, updateText) =>
    this.fstore.collection(`users/${currentUser}/notes`).doc(noteId).update({text: updateText})
};


export default Firebase;