import useFirestoreCollection from "./useFirestoreCollection";

const useNotesCollection = ({currentUser}) => 
  useFirestoreCollection(`users/${currentUser}/notes`)


export default useNotesCollection;