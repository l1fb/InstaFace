import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'; 
import fire from '../firebaseAuth';
import setUser from '../reducers/setUser'
import { changeName } from '../actions/index'

class Authorization extends Component {
  constructor(props) {
    super(props); 
    this.changeUser = this.changeUser.bind(this)
    this.loginWithFacebook = this.loginWithFacebook.bind(this); 
    this.loginWithGoogle = this.loginWithGoogle.bind(this); 
    this.logOut = this.logOut.bind(this); 
    fire.initFirebase(this.changeUser);
  }

  loginWithGoogle() {
    fire.signInWithGoogle(); 
  }

  loginWithFacebook() {
    fire.signInWithFacebook(); 
  }

  logOut() {
    fire.signOut(); 
  }

  changeUser(user) {
    this.props.changeName(user); 
    console.log('state user', this.props.user)
  }


  render() {
    return (
      <div className="auth">
      {this.props.user.name ?
      <div>
        <div>Welcome {this.props.user.name}</div><button onClick={this.logOut}>Sign Out</button>
      </div>
      :
      <div>
        <img 
          src="./assets/icons/google-login.png" 
          alt="google-login"
          className="loginBtn"
          onClick={this.loginWithGoogle}
        />
        <img 
          src="./assets/icons/facebook-login.png" 
          alt="facebook-login"
          className="loginBtn"
          onClick={this.loginWithFacebook}
        />
      </div>
      }
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeName: changeName
  }, dispatch); 
}

export default connect(mapStateToProps, matchDispatchToProps)(Authorization);

