import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "XXXX",
    authDomain: "XXX",
    databaseURL: "XXX",
    projectId: "rXX",
    storageBucket: "rXX",
    messagingSenderId: "3XXXX"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }
}

export default Firebase;