import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedEntry from './feedEntry';

class Feed extends Component {
  renderPhotos() {
    
  }

  render() {
    return (
      <div>
        {this.props.photos.map(photo =>
          <FeedEntry
            key={photo.id}
            photo={photo}
          />
        )}
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