import React, { Component } from 'react';
import Likes from './likes';

class FeedEntry extends Component {
  constructor(props) {
    super(props);
    console.log('am i getting photos', props.photo);
  }

  render() {
    return (
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 photoWrapper">
        <img 
          src={this.props.photo.photo_URL} 
          alt={this.props.photo.caption}
          className="photoEntry"
        />
        <span>{this.props.photo.caption}</span>
        <Likes 
          id={this.props.photo.photo_ID}
          count={this.props.photo.likes} 
        />
      </div>
    );
  }
}

export default FeedEntry;