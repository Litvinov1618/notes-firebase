import React, {useState} from 'react';
import useNotesCollection from './Firebase/useNotesCollection';
import Note from './Note';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import useStyles from './styles/useStyles';
import List from '@material-ui/core/List';

const UserNotes = ({currentUser}) => {
  const { documents, ready, remove, edit, add }
    = useNotesCollection(currentUser);
  const [text, setText] = useState('');
  const {flexColumn} = useStyles();
  const handleChange = event => setText(event.target.value);
  const sendNote = event => {
    if(event.key === 'Enter') {
      const date = new Date();
      add({text, date: date.valueOf()});
      setText('');
    };
  };

  return (
    <div className={flexColumn}>
      <TextField 
        label='Write smth'
        value={text}
        onChange={handleChange}
        onKeyPress={sendNote}
      />
      <List>
        {!ready && <span>Loading...</span>}
        {documents
          .map(note => <ListItem 
            alignItems='flex-start'
            component={Note}
            key={note.id}
            id={note.id} 
            note={note.data()}
            remove={remove}
            edit={edit}
        />)}
      </List>
    </div>
  );
};

export default UserNotes; 