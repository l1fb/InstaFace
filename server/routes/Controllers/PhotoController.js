const firebaseDatabase = require('../../firebaseDb');
const detectFace = require('../../facerecofuncs/detect'); 
const enrollFace = require('../../facerecofuncs/enroll');
const recognizeFace = require('../../facerecofuncs/recognize'); 

const PhotoController = {

    createPhoto : ((req, res) => {
        //here, add photo to S3 and get photoURL
        //let photo_URL = req.body.photo_URL;
        let photo_URL = 'http://imagizer.imageshack.com/img923/5938/lJOanw.jpg';
        let user_ID = req.body.user_ID;
        let caption = req.body.caption || null;
        let photo_ID = photo_URL.split('/')[3]; 
        firebaseDatabase.createPhoto(photo_ID, photo_URL, user_ID, caption);
        recognizeFace.recognizeFace(photo_URL, (result) => {
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
        let photo_ID = req.body.photo_ID; 
        //let url = req.body.photo_URL
        let url = 'http://imagizer.imageshack.com/img923/5938/lJOanw.jpg'; 
        enrollFace.enrollFace(url, name, (bool) => {
        if (bool) {
                firebaseDatabase.addPhotoTags(req.body.photo_ID, req.body.tag_name);
                res.send('successfully added a tag on the photo');
            }
            else {
                res.send('could not add tag on the photo')
            }
        })
    }), 

    getPhotoByTag : ((req, res) => {
        console.log('should be mike:', req.query.tag_name)
        firebaseDatabase.getPhotoByTag(req.query.tag_name, function(photos) {
            res.status(200).send(photo_URL);
          });
    })
}

module.exports = PhotoController; 
