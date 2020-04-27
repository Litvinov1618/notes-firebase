import React, {useState} from 'react';
import useFirestoreCollection from './Firebase/useFirestoreCollection';

const createNote = ({currentUser}) => {
  const {add} = useFirestoreCollection(`users/${currentUser}/notes`, false);
  const [text, setText] = useState('');
  const handleChange = (event) => setText(event.target.value);
  const sendNote = (event) => {
    if(event.key === 'Enter') add({text, date: new Date()})
  };

  return (
    <input value={text} onChange={handleChange} onKeyPress={sendNote}/>
  )
}

export default createNote;