import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navigation from './Navigation';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import HomePage from './Home';
import * as ROUTES from './constants/routes';
import { withFirebase } from './Firebase/main';

const App = ({firebase}) => {
  const [state, setState] = useState({ authUser:null });
  
  useEffect(() => {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? setState({ authUser })
        : setState({ authUser: null });
    });
  })
  return (
    <Router>
    <div>
      <Navigation authUser={state.authUser}/>
      <hr />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route exact path={ROUTES.HOME} component={HomePage} />
    </div>
  </Router>
  );
};
export default withFirebase(App);