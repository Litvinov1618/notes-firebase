import React from 'react';
import UserNotes from './UserNotes';
import useFirebaseUser from './Firebase/useFirebaseUser';
import AuthComponent from './AuthComponent';

const CheckIsUserAuth = () => {
  const { authUser } = useFirebaseUser();
  return (
    <div>
      {authUser ?
        <UserNotes currentUser={authUser.email} />
        : <AuthComponent />
      }
    </ div>
  )
}

export default CheckIsUserAuth;
