import { useState, useEffect } from 'react';
import firebase from './firebase';

const useMultipleFirebaseCollection = (collectionGroupName = 'notes', orderLimit = 3) => {
  const [notes, setNotes] = useState([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    return firebase.firestore().collectionGroup(collectionGroupName)
      .orderBy('date')
      .onSnapshot(
        snapshot => {
          setReady(true);
          setNotes(snapshot.docs);
        },
        error => {
          console.error('Cannot load Firestore collection', error);
        });
  });

  return { notes, ready };
}

export default useMultipleFirebaseCollection;
