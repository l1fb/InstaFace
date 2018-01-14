import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  confirmHandler() {
    // HAVE ACCESS
    // this.props.user
    // this.state.tagConfirmation
    // this.state.captionInput

    // NEED REDUCER
    // this.props.faceRectangle
    // this.props.photo_URL

    this.props.toggleUploaded();
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
                {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button> */}
              </div>

              <div className="modal-body">
                <img 
                  src="" 
                  alt=""
                />

                <p>Confirm Tag:</p>
                <input 
                  type="text" 
                  defaultValue={"Test Obama"} 
                  onChange={this.onChangeHandler} 
                />

                <p>Add a caption:</p>
                <input 
                  type="text" 
                  placeholder="Enter caption" 
                  onChange={this.onChangeHandler} 
                />
              </div>

              <div className="modal-footer">
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

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(ConfirmTag);