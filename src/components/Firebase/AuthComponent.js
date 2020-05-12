import uiConfig from './firebaseUIConfig';
import firebase from './firebase';
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const AuthComponent = () => 
  <StyledFirebaseAuth
    uiConfig={uiConfig}
    firebaseAuth={firebase.auth()}
  />


export default AuthComponent;