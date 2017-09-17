import React, { Component } from 'react';
import elegantMoose from './assets/ElegantMoose.jpeg';
import TextBox from './containers/textbox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={elegantMoose} className="App-logo" alt="logo" />
          <h2>NBA Picks</h2>
        </div>
        <TextBox />
      </div>
    );
  }
}

export default App;
