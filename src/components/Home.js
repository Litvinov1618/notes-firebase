import React from 'react';
import AuthUserContext from './Session/context';
import Notes from './Notes';

const Home = () => {
  return (
    <AuthUserContext.Consumer>
      {authUser => (
        authUser ? 
          <Notes currentUser={authUser.email} />
          : <h1>You can sign by press "Sign in" or "Sign up" button</h1>
      )}
    </AuthUserContext.Consumer>
  );
};

export default Home;