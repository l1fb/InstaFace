import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import searchTag from '../actions/searchTag';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.searchSubmitHandler = this.searchSubmitHandler.bind(this);
  }

  searchSubmitHandler() {
    axios.get('/instaface/photos/getPhotoByTag', {
      params: {
        tag_name: this.state.searchInput
      }
    })
      .then((response) => {
        const photosToDisplay = obj => {
          const allPhotos = [];
          
          for (let key in obj) {
            allPhotos.push(obj[key]);
          }
          
          return allPhotos;
        };
        
        const data = photosToDisplay(response.data);

        this.props.searchTag(data);
      })
      .catch((err) => {
        console.error('Failed to search by tag', err);
      });
  }

  onChangeHandler(e) {
    this.setState({
      searchInput: e.target.value
    })
  }

  render() {
    return (
      <div className="searchContainer">
        <div className="container search">
          <input 
            className="searchInput"
            type="text"
            name="search"
            placeholder="Search..."
            onChange={this.onChangeHandler}
          />
          {/* <img 
            src="./assets/images/search-btn.jpg"
            alt="search-button"
            className="searchBtn"
          /> */}
          <button 
            className="btn btn-lg searchBtn"
            onClick={this.searchSubmitHandler}
          >
            <img 
              src="./assets/icons/search-icon.png" 
              alt="search-icon"
              className="searchIcon"
            />
          </button>
        </div>
      </div>
    );
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    searchTag: searchTag
  }, dispatch);
}

export default connect(null, matchDispatchToProps)(Search);