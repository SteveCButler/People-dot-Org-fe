import firebase from 'firebase/app';
import 'firebase/auth';
// import { clientCredentials } from './client';

const dbUrl = 'https://localhost:7120';

const checkUser = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/checkUser/${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((resp) => {
      if (resp.status === 204) {
        resolve({});
      } else {
        resolve(resp.json());
      }
    })
    .catch(reject);
});

const registerUser = (userInfo) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/person`, {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

// const signIn = () => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth().signInWithPopup(provider);
// };

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account',
  });
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  firebase.auth().signOut();
};

export {
  signIn, //
  signOut,
  checkUser,
  registerUser,
};
