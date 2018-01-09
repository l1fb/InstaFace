const FRAPID = process.env.FRAPID;
const FRAPKEY = process.env.FRAPKEY;
const parser = require('body-parser');
const axios = require('axios');
const request = require('request');
const rp = require('request-promise');


// See extensive documentation on how to use this function below. 

const detectFace = function (imageUrl, callback) {
    var returnObj = {
        faceDetected: '',
        faceId: '',
        faceRectangle: {
            topLeftX: 0,
            topLeftY: 0,
            width: 0,
            height: 0
        }
    };

    bodybod = {
        "image": imageUrl,
        "selector": "ROLL" 
    }
    
    function processImage() {
        var options = {
            method: 'POST',
            url: 'https://api.kairos.com/detect',
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
                console.log('success', parsedBody.images[0].status)
                returnObj["faceDetected"] = parsedBody.images[0].status === "Complete" ? true : false;
                returnObj["faceId"] = parsedBody.images[0].faces[0].face_id;
                returnObj.faceRectangle["topLeftX"] = parsedBody.images[0].faces[0].topLeftX
                returnObj.faceRectangle["topLeftY"] = parsedBody.images[0].faces[0].topLeftY
                returnObj.faceRectangle["width"] = parsedBody.images[0].faces[0].width
                returnObj.faceRectangle["height"] = parsedBody.images[0].faces[0].height
                callback(returnObj)
            })
            .catch((err) => {
                callback("ERROR")
            });
    };

    processImage();
}


module.exports.detectFace = detectFace;

// DETECTFACE DOCUMENTATION
// ========================   

// detectFace function analyzes a photograph and returns an object
// indicating whether a face was detected in the photo, along with
// details pertainign to the face detected (location coordinates).a

// Arguments:
//     1) imageUrl: link to image to be analyzed

// Return value: Object containing:
//     1) faceDetected: true if face is detected
//     2) FaceId: faceId as provided by the API
//     3) faceRectangle: object conatining coordinates of face 
//        rectangle (top, left, width and height)
// 
// Notes:
//     - Face Rectangle is a box that Kairo's face regonition API 
//     creates around a face it recognizes. One additional thing to
//     note is that the returned coordinates all begin at the top left 
//     of the photo.
//
// How to use this function: this function takes in a link to a picture 
// URL and callback. The callback takes in one value "response" which 
// represents the object containing the return values of this function


