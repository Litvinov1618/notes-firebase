import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navigation from './Navigation';
import SignInPage from './SignIn';
import HomePage from './Home';
import * as ROUTES from './constants/routes';

const App = () => 
  <Router>
    <Navigation/>
    <Route path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route exact path={ROUTES.HOME} component={HomePage} />
  </Router>

export default App;