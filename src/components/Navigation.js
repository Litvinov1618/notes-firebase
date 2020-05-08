import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import SignOutButton from './SignOutButton';
import useFirebaseUser from './Firebase/useFirebaseUser';
import Link from '@material-ui/core/Link';
import useStyles from './styles/useStyles';

const Navigation = () => {
  const {authUser} = useFirebaseUser();
  const {textCenter} = useStyles()
  return (
    <div className={textCenter}>
      {authUser ? <AuthNav /> : <NonAuthNav />}
    </div >
  );
}

const NonAuthNav = () => 
  <>
    <Link component={RouterLink} to={ROUTES.SIGN_IN}>Sign In </Link>
    or
    <Link component={RouterLink} to={ROUTES.SIGN_UP}> Sign Up</Link>
  </>

const AuthNav = () => 
  <>
    <Link component={RouterLink} to={ROUTES.HOME}>Go to Notes</Link> or <SignOutButton />
  </>

export default Navigation;