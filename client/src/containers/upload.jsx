import React, { Component } from 'react';
import ConfirmTag from './confirmTag';

class Upload extends Component {
  render() {
    return (
      <div className="jumbotron container">
        <h2>Upload a photo!</h2>
        <ConfirmTag />
      </div>
    );
  }
}

export default Upload;