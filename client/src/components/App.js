import React, { Component } from 'react';

import './App.css';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import TweetList from './TweetList';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar />
        <SearchBar />
        <TweetList />
      </div>
    );
  }
}

export default App;
