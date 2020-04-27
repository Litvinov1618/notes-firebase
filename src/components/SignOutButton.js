import React from 'react';
import useFirebaseUser from './Firebase/useFirebaseUser';

const SignOutButton = () => {
  const {doSignOut} = useFirebaseUser();
  const signOut = () => doSignOut()
    .then(() => console.log('You signed out!'))
    .catch(error => console.log('Sign out error: ', error))
  return <button type='button' onClick={signOut}>Sign out</button>
};

export default SignOutButton;