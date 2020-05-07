import { useState } from 'react';
import firebase from './firebase';

/**
 * @param {string} collectionName
 */
const useFirestoreCollection = (collectionName) => {
  const [collection] = useState(() => firebase.firestore().collection(collectionName));

  const add = docData =>
    collection.add(docData)

  const remove = docId => 
    collection.doc(docId).delete()
  
  const edit = (docId, docData) => 
    collection.doc(docId).update(docData)

  return { add, remove, edit };
};

export default useFirestoreCollection;
