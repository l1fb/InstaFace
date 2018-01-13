const SHACKKEY = process.env.SHACKKEY;
const parser = require('body-parser');
const axios = require('axios');
const path = require('path');
const request = require('request');
const rp = require('request-promise');
const fs = require('fs');
var FormData = require('form-data');

const hostImage = function (imageFileLink, callback) {

    var dataform = {
        "api_key": SHACKKEY,
        "file@" : fs.createReadStream(imageFileLink)
    }

    var items = {
        method: "POST",
        url : "https://api.imageshack.com/v2/images",
        json: true,
        formData: dataform
    }

    rp(items)
    .then((response) => {
        var result = {
            imageUrl: response.result.images[0].direct_link
        };
        callback(result)
    })
    .catch((error) => {
        console.log("ERROR", error);
    })
}

module.exports.hostImage = hostImage;

// HOSTIMAGE DOCUMENTATION
// =======================  

// The following function takes a static image, uploads it into ImageShack
// an online image hosting service, and returns a link to the uploaded image. 

// Arguments:
//     1) imageFileLink: string including the path to the image to be uploaded

// Return value: 
//     1) imageUrl: Url for image uploaded

// Notes:

// If the file is to be pulled from a static location, use the following line:

// "file@" : fs.createReadStream(__dirname + "/faceimage.jpg")