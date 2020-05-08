import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';

const Note = ({note, id, remove, edit}) => {
  const deleteNote = () => remove(id);
  const editNote = () => {
    const date = new Date();
    const editText = prompt();
    edit(id, {text: editText, date: date.valueOf()});
  }

  return (
    <>
      <ListItemText>{note.text}</ListItemText>
      <ButtonGroup>
        <IconButton onClick={editNote}><CreateIcon/></IconButton>
        <IconButton onClick={deleteNote}><DeleteIcon /></IconButton>
      </ButtonGroup>
    </>
  )
}

export default Note;