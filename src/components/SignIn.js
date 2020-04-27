import React, { useState } from 'react';
import useFirebaseUser from './Firebase/useFirebaseUser';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const SignInForm = () => {
  const [state, setState] = useState({...INITIAL_STATE});
  const {
    email,
    password,
    error,
  } = state;

  const {doSignInWithEmailAndPassword} = useFirebaseUser();

  const onSubmit = event => {
    doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setState({...state, ...INITIAL_STATE });
        console.log('You signed as ' + email);
      })
      .catch(error => {
        setState({...state,  error });
      });
    event.preventDefault();
  };
  
  const onChange = event => {
    setState({...state, [event.target.name]: event.target.value});
  };

  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          value={email}
          onChange={onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={onChange}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Sign In</button>
        {error && <p>{error.message}</p>}
      </form>
    </>
  );
};

export default SignInForm;