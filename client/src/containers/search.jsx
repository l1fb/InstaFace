import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="searchContainer">
        <div className="container search">
          <input 
            className="searchInput"
            type="text"
            name="search"
            placeholder="Search..."
          />
          {/* <img 
            src="./assets/images/search-btn.jpg"
            alt="search-button"
            className="searchBtn"
          /> */}
          <button className="btn btn-lg searchBtn">
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

export default Search;