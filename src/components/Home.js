import React from 'react';
import UserNotes from './UserNotes';
import useFirebaseUser from './Firebase/useFirebaseUser';

const Home = () => {
  const {authUser} = useFirebaseUser();

  return (
    <>
      {authUser ? 
        <UserNotes currentUser={authUser.email} />
        : <h1>You can sign by press "Sign in" or "Sign up" button</h1>}
    </>
  )
}

export default Home;