import React from 'react';
import UserNotes from './UserNotes';
import useFirebaseUser from './Firebase/useFirebaseUser';
import useStyles from './styles/useStyles';
import SignIn from './SignIn';

const Home = () => {
  const {authUser} = useFirebaseUser();
  const {flexColumn} = useStyles();
  return (
    <div className={flexColumn}>
      {authUser ? 
        <UserNotes currentUser={authUser.email} />
        : <SignIn />}
    </div>
  )
}

export default Home;