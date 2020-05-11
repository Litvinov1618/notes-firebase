import React from 'react';
import UserNotes from './UserNotes';
import useFirebaseUser from './Firebase/useFirebaseUser';
import useStyles from './styles/useStyles';

const Home = () => {
  const {authUser} = useFirebaseUser();
  const {flexColumn} = useStyles();
  return (
    <div className={flexColumn}>
      {authUser ? 
        <UserNotes currentUser={authUser.email} />
        : <h1>You can sign by press "Sign in" or "Sign up" button</h1>}
    </div>
  )
}

export default Home;