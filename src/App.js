import React, { Component } from 'react';
// import logo from './logo.svg';
import NavigationBar from "./components/navigation_bar";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavigationBar/>
      </div>
    );
  }
}

export default App;
