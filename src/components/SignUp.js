import React, { useState } from 'react';
import { withFirebase } from './Firebase/main';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const SignUpForm = props => {
  const [state, setState] = useState({...INITIAL_STATE});
  const {
    username,
    email,
    passwordOne,
    passwordTwo,
    error
  } = state;

  const onSubmit = event => {
    props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(() => {
        setState({...state, ...INITIAL_STATE });
      })
      .catch(error => {
        setState({...state,  error });
      });
    event.preventDefault();
    console.log(state)
  };
  const onChange = event => {
    setState({...state, [event.target.name]: event.target.value});
  };

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          value={username}
          onChange={onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">Sign Up</button>
        {error && <p>{error.message}</p>}
      </form>
    </>
  );
};

export default withFirebase(SignUpForm);