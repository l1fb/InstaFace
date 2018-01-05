//requiring APIkey from .env file
require('dotenv').config();
const CONFIG = process.env.CONFIG;

//dependency
const firebase = require('firebase');

//initializing firebase database with the APIkey
firebase.initializeApp(CONFIG);

//firebase database
const database = firebase.database();


//exporting functions

createUser((username, first_name, last_name, user_ID) => { //create a new user into our '/users' collection
  //I: from CLIENT username, first_name, last_name, user_ID
  database.ref('/users' + user_ID).update({
      username: username,
      first_name: first_name,
      last_name: last_name,
      user_ID: user_ID
  });
});

createPhoto ((photo_URL, user_ID, caption) => { //create a new photo to user reference to '/photos' collection
   // returns generated photo_ID
   database.ref('/photos' + photo_URL).update({
     photo_ID: photo_ID,
     user_ID: user_ID,
     tag_ID: tag_ID,
     faceRectangle: faceRectangle,
     likes: 0,
     caption: caption,
     photo_URL: photoURL
   });
});

getUserID ((username) => { //fetches the 'username's unique 'user_ID' from '/users' collection
   // returns generated user_ID
});

addPhotoTags((photo_ID, tag_ID) => { //combines

});

getTagFromName((first_name) => {
  //returns tag_ID
});

getTagFromPhoto((photo_ID)=> {
  //returns tag_ID
});

getNameFromTag((tag_ID)=> {
  //returns full_name
});

getAllFaceIDs(()=> {
  //returns [face_ID] in an array?
});

getAllPhotos(() => {
  //returns [{photoURL, caption, likes, tags, faceRectangle}]
});

increaseLike((photo_URL) => {
  database.ref('/photos' + photo_URL + likes).transaction((likes) => {
    return likes ++;
  });
});

decreaseLike((photoURL) => {
  database.ref('/photos' + photo_URL + likes).transaction((likes) => {
    (!!likes) ? likes -- : null;
  });
});

getLike((photo_URL) => { //from '/photos' collection, return 'likes' value from 'photoURL' photo.
//returns likes from DB 
});

createTag((face_ID) => { //

});

addUserToTag((face_ID, userID) => {

});

addNameToTag((face_ID, first_name, last_name) => {

});

module.exports = {createUser, createPhoto, increaseLike};