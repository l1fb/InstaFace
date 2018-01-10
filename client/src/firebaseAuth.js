let firebase = require('firebase'); 
let config = require('../../api'); 

let auth; 
let changeUser; 

let fire = {
  initFirebase : (callback) => {
    //initialize firebase with a callback that is triggered on any event change
    changeUser = callback; 
    firebase.initializeApp(config);
    auth = firebase.auth(); 
    auth.onAuthStateChanged(fire.onAuthStateChanged.bind(this));
  },

  signInWithGoogle : () => {
    // Sign in Firebase using popup auth and Google as the identity provider.
    let provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  },

  signInWithFacebook : () => {
    // Sign in Firebase using popup auth and Facebook as the identity provider.
    let provider = new firebase.auth.FacebookAuthProvider(); 
    auth.signInWithPopup(provider); 
  },
  
  signOut : () => {
    // Sign out of Firebase.
    auth.signOut();
  },

  onAuthStateChanged : function(user) {
    //triggers on any state change
    if (user) { // User is signed in!
      changeUser(user); 
    } else{
      changeUser('no user')
    }
  }
}


module.exports = fire; 