import {useState, useEffect} from 'react';
import firebase from './firebase'

const useFirebaseUser = () => {
  const [auth] = useState(firebase.auth());
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => auth.onAuthStateChanged(authStatus => {
      authStatus
        ? setAuthUser(authStatus)
        : setAuthUser(null);
    }));

  const doSignOut = () => auth.signOut();

  return {authUser, doSignOut};
}

export default useFirebaseUser;