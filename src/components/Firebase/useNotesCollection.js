import useFirestoreCollection from "./useFirestoreCollection";

const useNotesCollection = (currentUser, immediate = true) => 
  useFirestoreCollection(`users/${currentUser}/notes`, immediate)


export default useNotesCollection;