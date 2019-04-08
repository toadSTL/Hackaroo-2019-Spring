import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyD0W7Vt2fZzLO6Z1GkSTxF4e-jxbiuwy1A',
    authDomain: 'ballot-friend-hackaroo-2019s.firebaseapp.com',
    databaseURL: 'https://ballot-friend-hackaroo-2019s.firebaseio.com',
    projectId: 'ballot-friend-hackaroo-2019s',
    storageBucket: 'ballot-friend-hackaroo-2019s.appspot.com',
    messagingSenderId: '1057973711152',
};

firebase.initializeApp(config);
// let loggedIn = false;
// const a =
// a.onAuthStateChanged((user) => {
//   loggedIn = !!user;
// });
export const auth = firebase.auth();
// export const authListener = firebase.auth().onAuthStateChanged(function (user) {
//   this.loggedIn = !!user;
// });

// class fb {
//   constructor() {
//     firebase.initializeApp(config);
//     this.auth = firebase.auth();
//   }
//
//   signUp = (email, password) =>
//     this.auth.createUserWithEmailAndPassword(email, password);
// }
//
// export default fb;
