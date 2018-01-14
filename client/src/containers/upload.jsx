import React, { Component } from 'react';
import ConfirmTag from './confirmTag';
import Dropzone from '../../public/dropzone';

class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploaded: false
    };

    Dropzone.autoDiscover = false;

    this.componentDidMount = this.componentDidMount.bind(this);
    this.toggleUploaded = this.toggleUploaded.bind(this);
  }
  
  getUserID() {
    console.log(this.props.user.user_ID);
    return this.props.user.user_ID;
  }

  componentDidMount() {
    const myDropzone = new Dropzone(".dropzone", { url: '/file-upload' });
    
    myDropzone.on('success', (file, res) => {
      console.log('Face successfully sent to FR API', res);
      this.toggleUploaded();
    });
  }

  toggleUploaded() {
    this.setState({
      uploaded: !this.state.uploaded
    });
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

        {
          !this.state.uploaded ? null :
          <div className="container">
            <ConfirmTag 
              toggleUploaded={this.toggleUploaded}
            />
          </div>
        }
      </div>
    );
  }
}

export default Upload;