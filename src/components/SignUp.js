import React, { useState } from 'react';
import useFirebaseUser from './Firebase/useFirebaseUser';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const SignUpForm = () => {
  const [state, setState] = useState({...INITIAL_STATE});
  const {
    email,
    password,
    error
  } = state;

  const {doCreateUserWithEmailAndPassword} = useFirebaseUser();

  const onSubmit = event => {
    doCreateUserWithEmailAndPassword(email, password)
      .then(() => {
        setState({...state, ...INITIAL_STATE });
        console.log(`User ${email} is created!`);
      })
      .catch(error => {
        setState({...state,  error });
      });
    event.preventDefault();
  };
  const onChange = event => {
    setState({...state, [event.target.name]: event.target.value});
  };

  const isInvalid =
    password === '' ||
    email === '';

  return (
    <>
      <h1>Sign Up</h1>
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
        <button disabled={isInvalid} type="submit">Sign Up</button>
        {error && <p>{error.message}</p>}
      </form>
    </>
  );
};

export default SignUpForm;