import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedEntry from './feedEntry';

class Feed extends Component {
  renderPhotos() {
    
  }

  render() {
    return (
      <div className="container feedWrapper">
        <div className="row">
          {this.props.photos.map(photo =>
            <FeedEntry
              key={photo.id}
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