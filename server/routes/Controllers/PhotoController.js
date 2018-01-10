
const firebaseDatabase = require('../../firebaseDb');

const PhotoController = {

    createPhoto : ((req, res) => {
        //here, add photo to S3 and get photoURL
        let photo_URL = req.body.photo_URL;
        let user_ID = req.body.user_ID;
        let caption = req.body.caption || null;
        console.log("createPhoto route is responding!", 'AND this is the req:', req.body);
        firebaseDatabase.createPhoto(photo_URL, user_ID, caption);
        res.send(req.body);
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
        firebaseDatabase.addPhotoTags(req.body.photo_URL, req.body.tag_name);
        res.send('successfully added a tag on the photo');
    }), 

    searchPhotos : ((req, res) => {
        //invoke database search function that searches for photos with a certain tag name
    })
}

module.exports = PhotoController; 