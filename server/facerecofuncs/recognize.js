const FRAPID = process.env.FRAPID;
const FRAPKEY = process.env.FRAPKEY;
const parser = require('body-parser');
const axios = require('axios');
const request = require('request');
const rp = require('request-promise');


// See extensive documentation on how to use this function below. 

const recognizeFace = function (imageUrl, callback) {
    var returnObj = {
        faceRectangle: {
            topLeftX: 0,
            topLeftY: 0,
            width: 0,
            height: 0
        },
        candidates: {}
    };

    bodybod = {
        "image": imageUrl,
        "gallery_name" : "Universal"     
    } 
    
    function processImage() {
        var options = {
            method: 'POST',
            url: 'https://api.kairos.com/recognize',
            headers: {
                'Content-Type': 'application/json',
                'app_id': FRAPID,
                'app_key': FRAPKEY
            },
            body: bodybod,
            json: true
        };
         
        rp(options)
            .then((parsedBody) => {
                console.log("SUCCESS", parsedBody)
                returnObj.faceRectangle["topLeftX"] = parsedBody.images[0].transaction.topLeftX;
                returnObj.faceRectangle["topLeftY"] = parsedBody.images[0].transaction.topLeftY;
                returnObj.faceRectangle["width"] = parsedBody.images[0].transaction.width;
                returnObj.faceRectangle["height"] = parsedBody.images[0].transaction.height;
                returnObj["candidates"] = parsedBody.images[0].candidates;
                callback(returnObj)
            })
            .catch((err) => {
                callback("ERROR")
            });
    };

    processImage();
}

module.exports.recognizeFace = recognizeFace;


// RECOGNIZEFACE DOCUMENTATION
// ===========================

// recognizeFace compares a face in photo against a set of "memory" 
// photos previously provided by the user to the API (stored in what 
// the API refers to as a gallery). Two sets of return values are provided
// one a photo is sent to be "recognized". The first is a face faceRectangle
// including the parameters of a rectangle that encases the face of the
// subject and the second is a candidates object, that returns a set of
// candidates most likely (along with a % likelyhood) vs the subject
// in the photo.

// Arguments:
//     1) imageUrl: link to image to be analyzed

// Return value: Object containing:
//     1) faceRectangle: object conatining coordinates of face 
//        rectangle (top, left, width and height)
//     2) Candidates: object containing likely candidates of 
//         recognition along with % likelihood. 

// Notes:
//     - Face Rectangle is a box that Kairo's face regonition API 
//     creates around a face it recognizes. One additional thing to
//     note is that the returned coordinates all begin at the top left 
//     of the photo.

// How to use this function: this function takes in a link to a picture 
// URL and callback. The callback takes in one value "response" which 
// represents the object containing the return values of this function


