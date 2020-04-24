import React, { useState } from 'react';
import useNotesCollection from './Firebase/useNotesCollection';

const Notes = ({currentUser}) => {
  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value)
  }
  const addNewNote = (event) => {
    if(event.key === 'Enter') add({text});
    setText('')
  }

  const {add, documents, loading} = useNotesCollection(currentUser)

  if (loading) return <p>...loading</p>
  return (
    <>
      <h1>Hi, {currentUser}</h1>
      <h2>Write everything you want</h2>
      <input 
        placeholder="Don't forget to press 'Enter'"
        style={{width: '260px'}}
        onChange={handleChange}
        onKeyPress={addNewNote}
        value={text}
      />
      <h2>Your notes</h2>
      <ol>
        {documents.map(doc => <li>{doc.data().text}</li>)}
      </ol>
    </>
  );
};

export default Notes;