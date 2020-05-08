import React from 'react';
import useFirebaseUser from './Firebase/useFirebaseUser';
import Link from '@material-ui/core/Link';

const SignOutButton = () => {
  const {doSignOut} = useFirebaseUser();
  const signOut = () => doSignOut()
    .then(() => console.log('You signed out!'))
    .catch(error => console.log('Sign out error: ', error))
  return <Link color='secondary' component='button' onClick={signOut}>Sign out</Link>
};

export default SignOutButton;