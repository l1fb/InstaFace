import React, { Component } from 'react';

class Likes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.count}
      </div>
    );
  }
}

export default Likes;