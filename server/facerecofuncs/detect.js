const parser = require('body-parser');
const axios = require('axios');
const request = require('request');

const detectFace = function (imageUrl) {
    var returnObj = {
        faceDetected: false,
        faceRectangle: {
            topLeftX: 0,
            topLeftY: 0,
            width: 0,
        }
    };

    imageUrl = imageUrl;
    bodybod = {
        "image": imageUrl,
        "selector": "ROLL" 
    }


    function processImage() {
        request({
            method: 'POST',
            url: 'https://api.kairos.com/detect',
            headers: {
              'Content-Type': 'application/json',
              'app_id': '562b6c3e',
              'app_key': 'c10f1cb231d8b685c3a376dee49e75f6'
            },
            body: JSON.stringify(bodybod),
          }, function (error, response, body) {
            // console.log('Status:', response.statusCode);
            // console.log('Headers:', JSON.stringify(response.headers));
            // console.log('Response:', body);
            returnObj.faceRectangle.topLeftX = response.images[0].faces.topLeftX;
            returnObj.faceRectangle.topLeftY = response.images.faces.topLeftY;
            returnObj.faceRectangle.width = response.images.faces.width;


          });
    };

    processImage();


    return returnObj
}


module.exports.detectFace = detectFace;

DETECTFACE DOCUMENTATION
========================   

detectFace function analyzes a photograph and returns an object
indicating whether a face was detected in the photo, along with
details pertainign to the face detected (location coordinates).a

Arguments:
    1) imageUrl: link to image to be analyzed

Return value: Object containing:
    1) faceDetected: true if face is detected
    2) faceRectangle: object conatining coordinates of face 
       rectangle (top, left, width and height)
   3) FaceId: faceId as provided by API

Notes:
    - Face Rectangle is a box that Kairo's face regonition API 
    creates around a face it recognizes. One additional thing to
    note is that the returned coordinates all begin at the top left 
    of the photo.
