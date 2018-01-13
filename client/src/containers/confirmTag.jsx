import React, { Component } from 'react';

class ConfirmTag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tagConfirmation: '',
      captionInput: ''
    };
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        ConfirmTag says hi
        - display photo that was just uploaded
        - create an input field for tag confirmation
        - create an input field for caption 
      </div>
    );
  }
}

export default ConfirmTag;