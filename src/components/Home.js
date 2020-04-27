import React from 'react';
import AuthUserContext from './Session/context';
import UserNotes from './UserNotes';

const Home = () => {
  return (
    <AuthUserContext.Consumer>
      {authUser => (
        authUser ? 
          <UserNotes currentUser={authUser.email} />
          : <h1>You can sign by press "Sign in" or "Sign up" button</h1>
      )}
    </AuthUserContext.Consumer>
  );
};

export default Home;