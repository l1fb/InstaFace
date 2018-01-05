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

createUser((username, first_name, last_name, user_ID) => {
  //I: from CLIENT username, first_name, last_name, user_ID
  //
});

createPhoto ((photo_URL, user_ID, caption) => {
   // returns generated photo_ID
});

getUserID ((username) => {
   // returns generated user_ID
});

addPhotoTags((photo_ID, tag_ID) => {

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

increaseLike((photoURL) => {

});

decreaseLike((photoURL) => {

});

getLike((photoURL) => {
//returns likes from DB 
});
createTag((face_ID) => {

});

addUserToTag((face_ID, userID) => {

});

addNameToTag((face_ID, first_name, last_name) => {

});