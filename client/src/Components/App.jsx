import React, { Component } from 'react';
import Header from './header';
import Search from '../containers/search';
import Upload from '../containers/upload';
import Feed from '../containers/feed';
import Footer from './footer';

const App = () => (
  <div>
    <Header />
    <Search />
    <Upload />
    <Feed />
    <Footer />
  </div>
);

export default App; 