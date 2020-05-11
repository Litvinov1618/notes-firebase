import { useState, useEffect } from 'react';
import firebase from './firebase';
import useFirestoreCollectionActions from './useFirestoreCollectionActions';

/**
 * @param {string} collectionName
 */
const useFirestoreCollection = (collectionName, immediate = true) => {
  /** @type {[Array<firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>>, React.Dispatch<React.SetStateAction<Array<firebase.firestore.DocumentData>>>]} */
  const [documents, setDocuments] = useState([]);
  const [collection] = useState(() => firebase.firestore().collection(collectionName));
  const [query, setQuery] = useState(collection);
  const [ready, setReadyState] = useState(false);
  const actions = useFirestoreCollectionActions(collectionName);

  useEffect(() => {
    if(immediate) 
      return query.orderBy('date').onSnapshot(
        snapshot => {
          setReadyState(true);
          setDocuments(snapshot.docs);
        }, 
        error => {
          console.error('Cannot load Firestore collection', error);
        }
      )
    }
  , [query, immediate]);

  return { ...actions, documents, collection, ready, query: setQuery };
};

export default useFirestoreCollection;
