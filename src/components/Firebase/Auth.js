import firebase from './firebase';

class Auth {
  constructor() {
    this.auth = firebase.auth();
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
};


export default Auth;
