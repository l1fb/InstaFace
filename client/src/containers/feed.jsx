import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedEntry from './feedEntry';

class Feed extends Component {
  render() {
    console.log('this is the photos', this.props.photos);
    return (
      !this.props.photos ? null
      :
      !this.props.photos.length ?
      <div className="container noResults feedWrapper">
        <img 
          src="./assets/icons/sad-face.png" 
          alt="sad-face"
          className="sadface"
        />
        <div>No Results To Show...</div>
      </div>
      :
      <div className="container feedWrapper">
        <div className="row">
          {this.props.photos.map(photo =>
            <FeedEntry
              key={photo.photo_URL}
              photo={photo}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos
  };
};

export default connect(mapStateToProps)(Feed);