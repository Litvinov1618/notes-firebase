import React from 'react';
import { withFirebase } from './Firebase/main';

const SignOutButton = ({firebase}) => {
  const signOut = () => {
    firebase.doSignOut()
      .then(() => console.log('You signed out!'))
      .catch(error => console.log('Sign out error: ', error));
  }
  return <button type='button' onClick={signOut}>Sign out</button>
}

export default withFirebase(SignOutButton);