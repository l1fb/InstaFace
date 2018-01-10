import React, { Component } from 'react';
import Likes from './likes';

class Feed extends Component {
  render() {
    return (
      <div>
        Feed says hi
        <Likes />
      </div>
    );
  }
}

export default Feed;