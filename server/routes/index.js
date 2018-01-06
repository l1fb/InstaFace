const express = require('express'); 
const router = express.Router(); 

//l1fb - requiring firebase DB controller
const firebaseDatabase = require('../firebaseDb');

router.route('/users/createUser').post((req, res) => {
  let username = req.body.username;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let user_ID = req.body.user_ID;
  console.log("route is working correctly", req.body);
  firebaseDatabase.createUser(username, first_name, last_name, user_ID);
  res.send(req.body);
});

router.route('/photos/createPhoto').post((req, res) => {
  let photo_URL = req.body.photo_URL;
  let user_ID = req.body.user_ID;
  let caption = req.body.caption || null;
  console.log("createPhoto route is responding!", 'AND this is the req:', req.body);
  firebaseDatabase.createPhoto(photo_URL, user_ID, caption);
  res.send(req.body);
});


module.exports = router; 
