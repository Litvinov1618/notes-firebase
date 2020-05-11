import React from 'react';
import SignOutButton from './SignOutButton';
import useFirebaseUser from './Firebase/useFirebaseUser';
import useStyles from './styles/useStyles';

const Navigation = () => {
  const {authUser} = useFirebaseUser();
  const {textCenter} = useStyles()
  return (
    <div className={textCenter}>
      {authUser ? <SignOutButton /> : <span>Sign in with email and password</span>}
    </div >
  );
}

export default Navigation;