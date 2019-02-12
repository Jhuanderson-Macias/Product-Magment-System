import * as firebase from 'firebase';

const config = {
    apiKey: "AXXXXXXX",
    authDomain: "XXXXX",
    databaseURL: "htXXXXXX",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};

firebase.initializeApp(config);

export default firebase;