const firebaseDatabase = require('../../firebaseDb');
const detectFace = require('../../facerecofuncs/detect'); 
const enrollFace = require('../../facerecofuncs/enroll');
const recognizeFace = require('../../facerecofuncs/recognize'); 
const hostImage = require('../../imagehosting/hosting');

const PhotoController = {

    createPhoto : ((req, res) => {
        let photo = req.file.path;
        let photo_URL; 
        hostImage.hostImage(photo, (url) => {
            photo_URL = url.imageUrl; 
            console.log('url', photo_URL); 
            recognizeFace.recognizeFace('http://' + photo_URL, (result) => {
                let returnObj = {faceRectangle : result.faceRectangle}  
                returnObj.photo_URL = photo_URL;            
                if (result.candidates && result.candidates[0].confidence > 0.50) {
                    returnObj.name = result.candidates[0].subject_id; 
                }
                else {
                    returnObj.name = "Anonomyous"
                }
                res.send(returnObj); 
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
        res.send("Decresased a Like :( why tho..");
    }),

    getPhotoInfo : ((req, res) => {
        firebaseDatabase.getPhotoInfo(req.headers.query, function(photoInfo) {
            res.status(200).send(photoInfo);
          })
    }),

    addPhotoTags : ((req, res) => {
        let faceRectangle = req.body.faceRectangle;
        let caption = req.body.caption; 
        let user_ID = req.body.user_ID; 
        let photo_URL = req.body.photo_URL; 
        let photo_ID = photo_URL.split('/')[3]; 
        firebaseDatabase.createPhoto(photo_ID, photo_URL, user_ID, caption);
        enrollFace.enrollFace(photo_URL, name, (bool) => {
        if (bool) {
                firebaseDatabase.addPhotoTags(photo_ID, req.body.tag_name, faceRectangle);
                res.send('successfully added a tag on the photo');
            }
            else {
                res.send('could not add tag on the photo')
            }
        })
    }), 

    getPhotoByTag : ((req, res) => {
        firebaseDatabase.getPhotoByTag(req.query.tag_name, function(photos) {
            res.status(200).send(photos);
          });
    }), 

    addCaption : ((req, res) => {
        let photo_ID = req.body.photo_URL.split('/')[3]; 
        firebaseDatabase.addCaption(photo_ID, req.body.caption)
        res.status(202).send();
    })

}

module.exports = PhotoController; 
