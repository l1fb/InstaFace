import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <input 
          type="text"
          name="search"
          placeholder="Enter Name"
        />
        <img 
          src="./assets/images/search-btn.jpg"
          alt="search-button"
          className="searchBtn"
        />
      </div>
    );
  }
}

export default Search;