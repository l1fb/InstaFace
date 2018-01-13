const FRAPID = process.env.FRAPID;
const FRAPKEY = process.env.FRAPKEY;
const parser = require('body-parser');
const axios = require('axios');
const request = require('request');
const rp = require('request-promise');

// See extensive documentation on how to use this function below. 

const enrollFace = function (imageUrl, subjectId, callback) {

    var returnVal = false;

    bodybod = {
        "image": imageUrl,
        "subject_id": subjectId,
        "gallery_name":"Universal"
    }
    
    function processImage() {
        var options = {
            method: 'POST',
            url: 'https://api.kairos.com/enroll',
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
                returnVal = true;
                console.log(parsedBody);
                callback(returnVal);
            })
            .catch((err) => {
                callback("ERROR")
            });
    };

    processImage();
}


module.exports.enrollFace = enrollFace;



// EROLLFACE DOCUMENTATION
// ========================   

// enrollFace "feeds" a face into a gallery (API's container for faces 
// to be regonized as provided by user). This funciton takes an image
// link and a "name" and assigns the face to that name. Later on, when a 
// face is provided to be recognized within the context of a gallery 
// then, said face is compared agains faces that have been previously
// "enrolled".

// Arguments:
//     1) imageUrl: link to image to be analyzed
//     2) subjectID: name of person in PushSubscriptionOptions. 

// Return value: 
//     1) Success: (boolean) true if successful. 

// Notes:
//     - Once a person is enrolled, no need to re-enroll. 

// How to use this function: this function takes a link to an image and a
// name provided by the user representing the person in that image. If the 
// person is successfully enrolled in the gallery (in this case we are using
// only one universal gallery) then a return value of success will be provided. 

