import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import initializeFeed from '../actions/initializeFeed';
import axios from 'axios';

import Header from './header';
import Search from '../containers/search';
import Upload from '../containers/upload';
import Feed from '../containers/feed';
import Footer from './footer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('/instaface/photos/getAllPhotos')
      .then((response) => {
        const photosToDisplay = obj => {
          const allPhotos = [];
          
          for (let key in obj) {
            allPhotos.push(obj[key]);
          }
          
          return allPhotos;
        };
        
        const data = photosToDisplay(response.data);
        console.log('this is the data', data);

        this.props.initializeFeed(data);
      })
      .catch((err) => {
        console.error('Failed to get all photos', err);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Search />
        <Upload />
        <Feed />
        <Footer />
      </div>
    )
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    initializeFeed: initializeFeed
  }, dispatch);
};

export default connect(null, matchDispatchToProps)(App); 