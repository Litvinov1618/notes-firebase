import React from 'react';
import AuthUserContext from './Session/context';
import CreateNote from './CreateNote';

const Home = () => {
  return (
    <AuthUserContext.Consumer>
      {authUser => (
        authUser ? 
          <CreateNote currentUser={authUser.email} />
          : <h1>You can sign by press "Sign in" or "Sign up" button</h1>
      )}
    </AuthUserContext.Consumer>
  );
};

export default Home;