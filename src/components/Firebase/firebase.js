import app from 'firebase/app';
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
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();
};

export default Firebase;