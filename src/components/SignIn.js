import React, { useState } from 'react';
import useFirebaseUser from './Firebase/useFirebaseUser';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import useStyles from './styles/useStyles';

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

  const {flexColumn, textCenter} = useStyles();

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

  const isInvalid =
    password === '' ||
    email === '';

  return (
    <>
      <h1 className={textCenter}>Sign In</h1>
      <form onSubmit={onSubmit} className={flexColumn}>
        <TextField
          label='Email'
          name='email'
          value={email}
          onChange={onChange}
          placeholder='Email Address'
        />
        <TextField
          label='Password'
          name='password'
          value={password}
          onChange={onChange}
          placeholder='Password'
        />
        <IconButton type="submit" disabled={isInvalid}><ArrowUpwardIcon /></IconButton>
        {error && <p>{error.message}</p>}
      </form>
    </>
  );
};

export default SignInForm;