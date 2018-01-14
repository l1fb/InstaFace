const firebaseDatabase = require('../../firebaseDb');
const detectFace = require('../../facerecofuncs/detect'); 
const enrollFace = require('../../facerecofuncs/enroll');
const recognizeFace = require('../../facerecofuncs/recognize'); 
const hostImage = require('../../imagehosting/hosting');

const PhotoController = {

    createPhoto : ((req, res) => {
        let photo = req.file.path;
        let photo_URL; 
        let user_ID = req.body.user_ID; 
        hostImage.hostImage(photo, (url) => {
            photo_URL = url.imageUrl; 
            recognizeFace.recognizeFace('http://' + photo_URL, (result) => {
                let photo_ID = photo_URL.split('/')[1]; 
                firebaseDatabase.createPhoto(photo_ID, photo_URL, user_ID);
                let returnObj = {faceRectangle : result.faceRectangle}  
                returnObj.photo_URL = photo_URL;            
                if (result.candidates && result.candidates[0].confidence > 0.50) {
                    returnObj.name = result.candidates[0].subject_id; 
                }
                else {
                    returnObj.name = "Anonomyous"
                }
                res.status(201).send(returnObj); 
            });
        })
    }),

    getAllPhotos : ((req, res) => {
        firebaseDatabase.getAllPhotos(function(allPhotos) {
            res.status(200).send(allPhotos);
          });
    }), 

    increaseLike : ((req, res) => {
        firebaseDatabase.increaseLike(req.body.photo_ID);
        res.status(201).send("Increased a Like! spread the love! <3");
    }), 

    decreaseLike : ((req, res) => {
        firebaseDatabase.decreaseLike(req.body.photo_URL);
        // console.log("decreaseLike routes responding!", req);
        res.status(201).send("Decresased a Like :( why tho..");
    }),

    getPhotoInfo : ((req, res) => {
        firebaseDatabase.getPhotoInfo(req.headers.query, function(photoInfo) {
            res.status(200).send(photoInfo);
          })
    }),

    addPhotoTags : ((req, res) => {
        let faceRectangle = req.body.faceRectangle;
        let caption = req.body.caption; 
        let photo_URL = req.body.photo_URL; 
        let photo_ID = photo_URL.split('/')[1]; 
        enrollFace.enrollFace('http://' + photo_URL, req.body.tag_name, (bool) => {
        if (bool) {
                firebaseDatabase.addPhotoTags(photo_ID, req.body.tag_name, faceRectangle);
                res.status(201).send('successfully added a tag on the photo');
            }
            else {
                res.status(500).send('could not add tag on the photo')
            }
        })
    }), 

    getPhotoByTag : ((req, res) => {
        firebaseDatabase.getPhotoByTag(req.query.tag_name, function(photos) {
            res.status(200).send(photos);
          });
    }), 

    addCaption : ((req, res) => {
        let photo_ID = req.body.photo_URL.split('/')[1]; 
        firebaseDatabase.addCaption(photo_ID, req.body.caption)
        res.status(201).send();
    })

}

module.exports = PhotoController; 
