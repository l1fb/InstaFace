import React, { Component } from 'react';
import Likes from './likes';

class FeedEntry extends Component {
  constructor(props) {
    super(props);
    console.log('am i getting photos', props.photo)
  }

  render() {
    return (
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 photoWrapper">
        <img 
          src={this.props.photo.url} 
          alt={this.props.photo.caption}
          className="photoEntry"
        />
        <span>{this.props.photo.caption}</span>
        <Likes count={this.props.photo.likes} />
      </div>
    );
  }
}

export default FeedEntry;

// {
//   id: 1,
//   caption: 'Sylvain Eating',
//   tag_name: 'Sylvain Ung',
//   url: 'localhost:3000',
//   likes: 123
// }