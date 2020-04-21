import React from 'react';
import { withFirebase } from './Firebase/main';

const ShowNotes = ({currentUser, firebase}) => {
  const show = () => {
    const userNotes = firebase.getNotes(currentUser)
    console.log(userNotes)
  }


  return ( <button onClick={show}>Show me my notes</button> )
}

export default withFirebase(ShowNotes);