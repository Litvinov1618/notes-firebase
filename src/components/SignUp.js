import React, { useState } from 'react';
import useFirebaseUser from './Firebase/useFirebaseUser';
import useStyles from './styles/useStyles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './styles/animation.css';

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
  const {flexColumn, textCenter} = useStyles();
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
      <h1 className={textCenter}>Sign Up</h1>
      <form onSubmit={onSubmit} className={flexColumn}>
        <TextField
          label='Email'
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email Address"
        />
        <TextField
          label='Password'
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
        />
        <IconButton type="submit" disabled={isInvalid}><ArrowUpwardIcon /></IconButton>
        <TransitionGroup>
          {error &&
            <CSSTransition timeout={300} classNames='transition'>
              <p>{error.message}</p>
            </CSSTransition>
          }
        </TransitionGroup>
      </form>
    </>
  );
};

export default SignUpForm;