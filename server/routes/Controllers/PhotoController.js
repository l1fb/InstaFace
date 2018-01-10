
const firebaseDatabase = require('../../firebaseDb');
const detectFace = require('../../facerecofuncs/detect'); 
const enrollFace = require('../../facerecofuncs/enroll');
const recognizeFace = require('../../facerecofuncs/recognize'); 

const PhotoController = {

    createPhoto : ((req, res) => {
        //here, add photo to S3 and get photoURL
        //fb will not allow urls to be valid path names, we must adjust accordingly
        let photo_URL = req.body.photo_URL;
        let user_ID = req.body.user_ID;
        let caption = req.body.caption || null;
        console.log("createPhoto route is responding!", 'AND this is the req:', req.body);
        firebaseDatabase.createPhoto(photo_URL, user_ID, caption);
        let url = 'https://timedotcom.files.wordpress.com/2017/09/obamahealthcarespeech-em-850166806.jpg'
        recognizeFace.recognizeFace(url, (result) => {
            let returnObj = {faceRectangle : result.faceRectangle}             
            if (result.candidates && result.candidates[0].confidence > 0.50) {
                returnObj.name = result.candidates[0].subject_id; 
            }
            else {
                returnObj.name = "Anonomyous"
            }
            res.send(returnObj); 
        }); 
    }),

    getAllPhotos : ((req, res) => {
        firebaseDatabase.getAllPhotos(function(allPhotos) {
            res.status(200).send(allPhotos);
          });
    }), 

    increaseLike : ((req, res) => {
        firebaseDatabase.increaseLike(req.body.photo_URL);
        // console.log("increaseLike routes responding!", req);
        res.send("Increased a Like! Spread the love..");
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
        let name = req.body.tag_name; 
        let url = 'https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_400x400.jpg'; 
        enrollFace.enrollFace(url, name, (bool) => {
        if (bool) {
                firebaseDatabase.addPhotoTags(req.body.photo_URL, req.body.tag_name);
                res.send('successfully added a tag on the photo');
            }
            else {
                res.send('could not add tag on the photo')
            }
        })
    }), 

    searchPhotos : ((req, res) => {
        //invoke database search function that searches for photos with a certain tag name
    })
}

module.exports = PhotoController; 
