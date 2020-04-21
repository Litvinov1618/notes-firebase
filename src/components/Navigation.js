import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import SignOutButton from './SignOutButton';
import AuthUserContext from './Session/context';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => authUser ? <AuthNav /> : <NonAuthNav />}
  </AuthUserContext.Consumer>
);

const NonAuthNav = () => (
  <>
    <Link to={ROUTES.SIGN_IN}>Sign In</Link> or <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </>
);

const AuthNav = () => (
  <>
    <SignOutButton />
    <br/>
    <Link to={ROUTES.HOME}>Home</Link>
  </>
);

export default Navigation;