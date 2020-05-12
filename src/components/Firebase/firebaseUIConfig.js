import firebase from './firebase';

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
}

export default uiConfig;