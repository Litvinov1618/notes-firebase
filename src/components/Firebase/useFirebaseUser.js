import {useState, useEffect} from 'react';
import firebase from './firebase'

const useFirebaseUser = () => {
  const [auth] = useState(firebase.auth());
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(authStatus => {
      authStatus
        ? setAuthUser(authStatus)
        : setAuthUser(null);
    });
  });

  const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

  const doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

  const doSignOut = () => auth.signOut();

  return {authUser, doSignOut, doSignInWithEmailAndPassword, doCreateUserWithEmailAndPassword};
}

export default useFirebaseUser;