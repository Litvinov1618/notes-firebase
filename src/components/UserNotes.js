import React, {useState} from 'react';
import useNotesCollection from './Firebase/useNotesCollection';
import Note from './Note';

const UserNotes = ({currentUser}) => {
  const { documents, ready, remove, edit, add }
    = useNotesCollection(currentUser);
  const [text, setText] = useState('');
  const handleChange = event => setText(event.target.value);
  const sendNote = event => {
    if(event.key === 'Enter') {
      const date = new Date();
      add({text, date: date.valueOf()});
      setText('');
    };
  };

  return (
    <div>
      <input value={text} onChange={handleChange} onKeyPress={sendNote}/>
      <ol>
        {!ready && <span>Loading...</span>}
        {documents
          .map(note => <Note 
            key={note.id}
            id={note.id} 
            note={note.data()}
            remove={remove}
            edit={edit}
        />)}
      </ol>
    </div>
  );
};

export default UserNotes; 