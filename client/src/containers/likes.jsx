import React, { Component } from 'react';

class Likes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="likes">
        <img 
          src="./assets/icons/heart-icon-empty.png" 
          alt="heart-icon-empty"
          className="likeHeart"
        />
        {this.props.count}
      </div>
    );
  }
}

export default Likes;