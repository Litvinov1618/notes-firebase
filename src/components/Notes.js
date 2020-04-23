import React, {useState} from 'react';
import { withFirebase } from './Firebase/main';

const Notes = ({currentUser, firebase}) => {
  const [text, setText] = useState('');
  const [notes, setNotes] = useState(firebase.getUserNotes(currentUser))

  const addNewNote = event => {
    if(event.key === 'Enter') {
      firebase.addNote(currentUser, text)
        .then(() => {
          console.log(currentUser + ' added a new note!');
        })
        .catch(error => {
          console.error('Error writing document: ', error);
        });
      setNotes(firebase.getUserNotes(currentUser));
      setText('');
    };
  };

  const handleChange = event => {
    setText(event.target.value);
  };

  const deleteNote = (event) => {
    const noteId = event.target.parentNode.id;
    firebase.deleteNote(currentUser, noteId)
      .then(() => {
        console.log(`Document with id ${noteId} successfully deleted!`);
      }).catch(error => {
        console.error("Error removing document: ", error);
      });
    setNotes(firebase.getUserNotes(currentUser));
  };

  const editNote = (event) => {
    const noteId = event.target.parentNode.id;
    const updateText = window.prompt('Edit this note');
    if(updateText) {
      firebase.updateNote(currentUser, noteId, updateText)
        .then(() => {
          console.log(`Document with id ${noteId} successfully updated!`);
        })
        .catch(error => {
          console.error("Error updating document: ", error);
        });
    }
    setNotes(firebase.getUserNotes(currentUser));
  };

  return (
    <>
      <h1>Hello, {currentUser}</h1>
      <h2>You can write everything you want</h2>
      <input onKeyPress={addNewNote} onChange={handleChange} value={text}/>
      <ol>
        {notes ? notes.map(note => 
        <li id={note.id} key={note.id}>
          <p>{note.text}</p>
          <p>Id: {note.id}</p>
          <span onClick={deleteNote} role='img' aria-label='delete note'>❎</span>
          <span onClick={editNote} role='img' aria-label='edit note'>✏️</span>
        </li>
        ) : <span>Loading...</span> }
      </ol>
    </>
  );
};

export default withFirebase(Notes);