import React, { Component } from 'react';
import "./styles/css/styles.css";
import 'antd/dist/antd.css';
import HomeScreen from './containers/Home';
import AboutScreen from './containers/About';
import PricesScreen from './containers/Prices';
import GuestRoute from './containers/Routes/GuestRoute.js';
import UserRoute from './containers/Routes/UserRoute.js';
import { Route } from "react-router-dom";



class App extends Component {
  render() {
      const { location } = this.props;
    return (
      <div className="App">
          <Route exact path='/' component={ HomeScreen } />
          <GuestRoute
              location={ location }
              path="/about"
              exact
              component={ AboutScreen }
          />
          <UserRoute
              location={ location }
              path="/prices"
              exact
              component={ PricesScreen }
          />
      </div>
    );
  }
}

export default App;
