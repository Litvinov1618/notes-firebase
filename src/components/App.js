import React from 'react';
import UserNotes from './UserNotes';
import useFirebaseUser from './Firebase/useFirebaseUser';
import useStyles from './styles/useStyles';
import AuthComponent from './AuthComponent';

const App = () => {
  const {authUser} = useFirebaseUser();
  const {flexColumn} = useStyles();
  return (
    <div className={flexColumn}>
      {authUser ? 
        <UserNotes currentUser={authUser.email} />
        : <AuthComponent />}
    </div>
  )
}

export default App;