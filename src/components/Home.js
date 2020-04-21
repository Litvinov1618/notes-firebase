import React from 'react';
import AuthUserContext from './Session/context';
import WriteNote from './WriteNote';
import ShowNotes from './ShowNotes';

const Home = () => {
  return (
    <AuthUserContext.Consumer>
      {authUser => (
        authUser ? 
          <>
            <WriteNote currentUser={authUser.email} />
            <ShowNotes currentUser={authUser.email} />
          </>
          : <h1>You can sign by press "Sign in" or "Sign up" button</h1>
      )}
    </ AuthUserContext.Consumer>
  );
};

export default Home;