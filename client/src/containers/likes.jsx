import React, { Component } from 'react';
import axios from 'axios';

class Likes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heartSrc: './assets/icons/heart-icon-empty.png',
      count: props.count
    };

    console.log('this is the id', props.id);

    this.fillHeart = this.fillHeart.bind(this);
    this.emptyHeart = this.emptyHeart.bind(this);
    this.increaseLike = this.increaseLike.bind(this);
  }

  fillHeart() {
    this.setState({
      heartSrc: './assets/icons/heart-icon.png'
    });
  }

  emptyHeart() {
    this.setState({
      heartSrc: './assets/icons/heart-icon-empty.png'
    });
  }

  increaseLike() {
    axios.put('/instaface/photos/increaseLike', {
      photo_ID: this.props.id
    })
      .then(() => {
        console.log('Increased Likes!')
      })
      .catch((err) => {
        console.error('Could not increase likes', err);
      })

    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div 
        className="likes"
        onMouseOver={this.fillHeart}
        onMouseOut={this.emptyHeart}
        onClick={this.increaseLike}
      >
        <img
          src={this.state.heartSrc} 
          alt="heart-icon-empty"
          className="likeHeart"
        />
        {this.state.count}
      </div>
    );
  }
}

export default Likes;