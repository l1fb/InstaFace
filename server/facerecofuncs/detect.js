const parser = require('body-parser');
const axios = require('axios');

const detectFace = function (imageUrl) {
    var returnObj = {
        faceDetected: false,
        faceRectangle: {
            top: 0,
            left: 0,
            width: 0,
            height: 0
        }
    };


    return returnObj
}


// DETECTFACE DOCUMENTATION
// ========================   

// detectFace function analyzes a photograph and returns an object
// indicating whether a face was detected in the photo, along with
// details pertainign to the face detected (location coordinates).a

// Arguments:
//     1) imageUrl: link to image to be analyzed

// Return value: Object containing:
//     1) faceDetected: true if face is detected
//     2) faceRectangle: object conatining coordinates of face 
//    rectangle (top, left, width and height)
// 
// Notes:

//     - Face Rectangle is a box that Azure's face regonition API 
//     creates around a face it recognizes. 