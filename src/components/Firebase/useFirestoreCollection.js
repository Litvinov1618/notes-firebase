import { useState } from 'react';
import firebase from './firebase';

/**
 * @param {string} collectionName
 * @param {boolean} immediate Start loading on execution
 */
const useFirestoreCollection = (collectionName, immediate = true) => {
  /** @type {[Array<firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>>, React.Dispatch<React.SetStateAction<Array<firebase.firestore.DocumentData>>>]} */
  const [documents, setDocuments] = useState([]);
  const [collection] = useState(() => firebase.firestore().collection(collectionName));
  const [query, setQuery] = useState(collection);
  const [loaded, setLoadedState] = useState(false);
  const [loading, setLoadingState] = useState(false);

  const add = docData => {
    collection.add(docData)
      .then(load)
      .catch(error => console.log(error));
  };
  const deleteDoc = docId => {
    collection.doc(docId).delete()
      .then(load)
      .catch(error => console.log(error));
  };
  const editDoc = (docId, docData) => {
    collection.doc(docId).update(docData)
      .then(load)
      .catch(error => console.log(error));
  };

  const load = () => {
    if (loading) return;

    setLoadingState(true);

    query.get().then(
      snapshot => {
        if (!loaded) setLoadedState(true);
        setLoadingState(false);
        setDocuments(snapshot.docs);
      },
      error => {
        if (!loaded) setLoadedState(true);
        setLoadingState(false);
        console.error('Cannot load Firestore collection', error);
      }
    );
  };

  if (immediate && !loaded) load();

  return { documents, collection, loading, load, add, deleteDoc, editDoc, query: setQuery };
};

export default useFirestoreCollection;
