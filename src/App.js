import React, { Component } from 'react';
import "./styles/css/styles.css";
import HomeScreen from './containers/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
          <HomeScreen/>
      </div>
    );
  }
}

export default App;
