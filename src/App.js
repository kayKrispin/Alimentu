import React, { Component } from 'react';
import "./styles/css/styles.css";
import 'antd/dist/antd.css';
import HomeScreen from './containers/Home';
import AboutScreen from './containers/About';
import PricesScreen from './containers/Prices';
import UserArea from './containers/UserArea';
import Documents from './containers/Documents';
<<<<<<< HEAD
import AuthFlow from './containers/AuthFlow';
=======
>>>>>>> 9b70da639cedfe34b3dfd6accfc4e71d20f4e4f6
import GuestRoute from './containers/Routes/GuestRoute.js';
import UserRoute from './containers/Routes/UserRoute.js';
import { Route } from "react-router-dom";



class App extends Component {
  render() {
      const { location } = this.props;
    return (
      <div className="App">
          <Route exact path='/' component={ HomeScreen } />
          <Route exact path='/document' component={ Documents } />
<<<<<<< HEAD
          <Route exact path='/auth-flow' component={ AuthFlow } />
=======
>>>>>>> 9b70da639cedfe34b3dfd6accfc4e71d20f4e4f6
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
          <UserRoute
              location={ location }
              path="/mycabinet"
              exact
              component={ UserArea }
          />
      </div>
    );
  }
}

export default App;
