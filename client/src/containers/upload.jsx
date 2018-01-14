import React, { Component } from 'react';
import ConfirmTag from './confirmTag';
import Dropzone from '../../public/dropzone';

class Upload extends Component {
  constructor(props) {
    super(props);

    Dropzone.autoDiscover = false;
  }

  componentDidMount() {
    const myDropzone = new Dropzone(".dropzone", { url: '/file-upload' });
    
    myDropzone.on('success', (file, res) => {
      console.log('Face successfully sent to FR API', res);
    })
  }

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