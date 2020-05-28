import React from 'react';
import useMultipleFirebaseCollection from './Firebase/useMultipleFirebaseCollection';

const Home = () => {
  const { notes, ready } = useMultipleFirebaseCollection();
  return (
    <div>
      <h1>Recent user notes</h1>
      {!ready && <span>Loading...</span>}
      {notes.map(note => <p key={note.id}>{note.data().text}</p>)}
    </div>
  );
}

export default Home;
