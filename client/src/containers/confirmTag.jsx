import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class ConfirmTag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tagConfirmation: '',
      captionInput: ''
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.confirmHandler = this.confirmHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  confirmHandler() {
    // NEEDED
    // caption / photo_URL / faceRectangle / user_ID / tag_name

    // HAVE ACCESS
    // this.props.user
    // this.state.captionInput
    // this.state.tagConfirmation
    // this.props.initializeFeed()
    
    // NEED REDUCER
    // this.props.tagPrediction
    // this.props.faceRectangle
    // this.props.photo_URL

    axios.put('/instaface/photos/addPhotoTags', {
      photo_URL: this.props.activePhoto.photo_URL,
      faceRectangle: this.props.activePhoto.faceRectangle,
      tag_name: this.state.tagConfirmation,
      user_ID: this.props.user.user_ID
    })
      .then(() => {
        axios.put('/instaface/photos/addCaption', {
          photo_URL: this.props.activePhoto.photo_URL,
          caption: this.state.captionInput
        })
          .then(() => {
            this.props.refreshFeed();
          })
          .catch((err) => {
            console.error('Failed to add caption', err);
          })
      })
      .catch((err) => {
        console.error('Error adding photo data', err);
      });

    this.props.toggleUploaded();
    this.props.refreshFeed();
  }

  render() {
    return (
      <div>
        <div className="fileUploader">
          <button 
            type="button" 
            className="btn btn-primary confirmBtn" 
            data-toggle="modal" 
            data-target="#exampleModalLong"
          >
            Confirm Tag
          </button>
        </div>

        <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="confirmationModal" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title" id="confirmationModal">Confirm Facial Recognition Prediction</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <img 
                  src={this.props.activePhoto.photo_URL} 
                  alt=""
                  className="modalImage"
                />

                <form>
                  <div className="modalInputContainer">
                    Confirm Tag:
                    {
                      (!this.props.activePhoto.tagPrediction || this.props.activePhoto.tagPrediction === 'Anonomyous') ?
                      <input 
                        type="text" 
                        placeholder="Enter Full Name" 
                        onChange={this.onChangeHandler} 
                        className="modalInput"
                        required
                      />
                      :
                      <input 
                        type="text" 
                        defaultValue={this.props.activePhoto.tagPrediction} 
                        onChange={this.onChangeHandler} 
                        className="modalInput"
                        required
                      />
                    }
                  </div>

                  <div className="modalInputContainer">
                    <p>Add a caption:</p>
                    <input 
                      type="text" 
                      placeholder="Enter Caption" 
                      onChange={this.onChangeHandler} 
                      className="modalInput"
                      required
                    />
                  </div>

                  <div className="modalInputContainer">
                    <button 
                      type="button" 
                      className="btn btn-primary confirmBtn"
                      data-toggle="modal" 
                      data-target="#exampleModalLong"
                      onClick={this.confirmHandler}
                    >
                      Confirm
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    activePhoto: state.activePhoto
  };
};

export default connect(mapStateToProps)(ConfirmTag);