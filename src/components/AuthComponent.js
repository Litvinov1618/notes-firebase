import uiConfig from './Firebase/firebaseUIConfig';
import firebase from './Firebase/firebase';
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const AuthComponent = () => 
  <StyledFirebaseAuth
    uiConfig={uiConfig}
    firebaseAuth={firebase.auth()}
  />

export default AuthComponent;