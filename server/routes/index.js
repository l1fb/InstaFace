const express = require('express'); 
const router = express.Router(); 
const UserController = require('./Controllers/UserController'); 
const PhotoController = require('./Controllers/PhotoController'); 

//l1fb - requiring firebase DB controller
const firebaseDatabase = require('../firebaseDb');

router.route('/users/createUser')
  .post(UserController.createUser)

router.route('/photos/createPhoto')
  .post(PhotoController.createPhoto)

router.route('/photos/getAllPhotos')
  .get(PhotoController.getAllPhotos)

router.route('/photos/increaseLike')
  .put(PhotoController.increaseLike)

router.route('/photos/decreaseLike')
  .put(PhotoController.decreaseLike)

router.route('/photos/getPhotoInfo')
  .get(PhotoController.getPhotoInfo)

router.route('/photos/addPhotoTags')
  .put(PhotoController.addPhotoTags)

router.route('/photos/searchPhotos')
  .get(PhotoController.searchPhotos)

router.route('/photos/getPhotoByTag')
  .get(PhotoController.getPhotoByTag)

module.exports = router; 


//superior spider, spider-verse, new 52 justice, the flash 2016, justice league 2011, avengers vs x-man, civil 1 and 2, infinity gauntlet (1991)