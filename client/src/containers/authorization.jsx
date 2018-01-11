import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'; 
import fire from '../firebaseAuth';
import setUser from '../reducers/setUser'
  
  class Authorization extends Component {

class Authorization extends Component {
  constructor(props) {
    super(props); 
    fire.initFirebase(()=>{});
    //fire.signOut(); 
  }

  render() {
    return (
      <div className="auth">
        <img 
          src="./assets/images/google-login.jpg" 
          alt="google-login"
          className="loginBtn"
        />
        <img 
          src="./assets/images/facebook-login.jpg" 
          alt="facebook-login"
          className="loginBtn"
        />
      </div>
    );
  }
}

const matchStateToProps = (state) => {
  return {
    activeUser: activeUser
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setUser: setUser
  }, dispatch); 
}

export default connect(matchDispatchToProps)(Authorization);

