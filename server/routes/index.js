const express = require('express'); 
const router = express.Router(); 

//l1fb - requiring firebase DB controller
const firebaseDatabase = require('../firebaseDb');

router.route('/users/createUser').post((req, res) => {
  let username = req.body.username;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let user_ID = req.body.user_ID;
  console.log("route is working correctly", username);
  firebaseDatabase.createUser(username, first_name, last_name, user_ID);
});
 


module.exports = router; 
