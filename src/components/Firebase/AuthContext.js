import React from 'react';

const AuthContext = React.createContext(null);

export const withAuth = Component => props => (
  <AuthContext.Consumer>
    {firebase => <Component {...props} firebase={firebase}/>}
  </AuthContext.Consumer>
);

export default AuthContext;