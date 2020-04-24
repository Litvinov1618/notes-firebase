import React, { useState } from 'react';
import useNotesCollection from './Firebase/useNotesCollection';

const Notes = ({currentUser}) => {
  const {add, documents, loading} = useNotesCollection(currentUser);
  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const addNewNote = (event) => {
    if(event.key === 'Enter') {
      add({text, date: new Date()});
      setText('');
    };
  };

  const editNote = () => console.log(2);
  const deleteNote = () => console.log(1);

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
      {loading && <p>...loading</p>}
      <ol>
        {documents
          .sort((a,b) => a.data().date - b.data().date)
          .map(doc =>
          <li key={doc.data().date} id={doc.id}>
            <p>{doc.data().text}</p>
            <span role='img' aria-label='Delete note' onClick={deleteNote}>❎</span>
            <span role='img' aria-label='Edit note' onClick={editNote}>✏️</span>
          </li>)
        }
      </ol>
    </>
  );
};

export default Notes;