import React, { Component } from 'react';
import ConfirmTag from './confirmTag';

class Upload extends Component {

  render() {
    return (
      <div className="container">
        <div className="uploadWrapper">
          <div className="row uploadTitle">
            <img 
              src="assets/images/line.jpg" 
              alt="line"
              className="col-lg-4 col-md-4 col-sm-3 col-xs-3 line"
            />
            <h2 className="col-lg-4 col-md-4 col-sm-6 col-xs-6">UPLOAD A PHOTO</h2>
            <img 
              src="assets/images/line.jpg" 
              alt="line"
              className="col-lg-4 col-md-4 col-sm-3 col-xs-3 line"
            />
          </div>

          <div className="fileUploader">
            {/* <input
              name="file"
              placeholder="Select a file to upload"
              className="uploadInput"
            />
            <button
              className="uploadBtn"
            >
              Upload File
            </button> */}
            <form
              action="/file-upload"
              className="dropzone"
              id="fileDrop"
            ></form>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;