import auth from '../auth';

export class AuthService {
    user;
    // loggedIn = false;

    // constructor() {
    //   auth.onAuthStateChanged(function (u) {
    //     // this.loggedIn = !!u;
    //   });
    // }

    // static listenForAuth = () =>
    //   auth.onAuthStateChanged(function (user) {
    //     this.loggedIn = !!user;
    //   });

    static SignInEmailAndPassword = (email, password) => {
        try {
            this.user = auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            // console.log(error);
        }
    }
}
