import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import SignOutButton from './SignOutButton';

const Navigation = ({authUser}) => (
  <>{authUser ? <AuthNav/> : <NonAuthNav/>}</>
)

const NonAuthNav = () => (
  <>
    <Link to={ROUTES.SIGN_IN}>Sign In</Link> or <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </>
)

const AuthNav = () => (
  <><Link to={ROUTES.HOME}>Home</Link> or <SignOutButton /></>
)

export default Navigation;