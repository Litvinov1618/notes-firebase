import React, {useState} from 'react';
import { withFirebase } from './Firebase/main';

const WriteNote = ({currentUser, firebase}) => {
  const [state, setState] = useState('');

  const handleEnter = event => {
    if(event.key === 'Enter') {
      firebase.addNote(currentUser, state)
      setState('')
    }
  };

  const handleChange = event => {
    setState(event.target.value)
  };

  return (
    <>
      <h1>Hello, {currentUser}</h1>
      <h2>You can write everything you want</h2>
      <input onKeyPress={handleEnter} onChange={handleChange} value={state}/>
    </>
    
  )
};

export default withFirebase(WriteNote);