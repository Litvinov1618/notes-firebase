import React from 'react';

const Note = ({note, id, remove, edit}) => {
  const deleteNote = () => remove(id);
  const editNote = () => {
    const date = new Date();
    const editText = prompt();
    edit(id, {text: editText, date: date.valueOf()});
  }

  return (
    <div>
      <p>{note.text}</p>
      <span role='img' aria-label='edit' onClick={editNote}>✏️</span>
      <span role='img' aria-label='delete' onClick={deleteNote}>❎</span>
    </div>
  )
}

export default Note;