import React, {useState} from 'react';
import useNotesCollection from './Firebase/useNotesCollection';
import Note from './Note';
import TextField from '@material-ui/core/TextField';
import useStyles from './styles/useStyles';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './styles/animation.css';

const UserNotes = ({currentUser}) => {
  const { documents, ready, remove, edit, add }
    = useNotesCollection(currentUser);
  const [text, setText] = useState('');
  const {flexColumn} = useStyles();
  const handleChange = event => setText(event.target.value);
  const sendNote = event => {
    if(!text) return
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
        {!ready && <span>Loading...</span>}
        <TransitionGroup>
          {documents.map(note => 
            <CSSTransition timeout={300} key={note.id} classNames='transition'>
              <Note key={note.id} id={note.id} note={note.data()} remove={remove} edit={edit}/>
            </CSSTransition>
          )}
        </TransitionGroup>
    </div>
  )
}

export default UserNotes; 