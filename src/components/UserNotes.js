import React, {useState} from 'react';
import useNotesCollection from './Firebase/useNotesCollection';
import Note from './Note';

const UserNotes = ({currentUser}) => {
  const { documents, loading, deleteDoc, editDoc, add }
    = useNotesCollection(currentUser);
  const [text, setText] = useState('');
  const handleChange = event => setText(event.target.value);
  const sendNote = event => {
    if(event.key === 'Enter') {
      const date = new Date();
      add({text, date: date.valueOf()});
      setText('')
    };
  };

  return (
    <div>
      <input value={text} onChange={handleChange} onKeyPress={sendNote}/>
      <ol>
        {loading && <span>Loading...</span>}
        {documents
          .sort((a,b) => b.data().date - a.data().date)
          .map(note => <Note 
            key={note.id}
            id={note.id} 
            note={note.data()}
            deleteDoc={deleteDoc}
            editDoc={editDoc}
        />)}
      </ol>
    </div>
  );
};

export default UserNotes; 