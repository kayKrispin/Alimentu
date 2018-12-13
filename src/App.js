import React, { Component } from 'react';
import "./styles/css/styles.css";
import 'antd/dist/antd.css';
import HomeScreen from './containers/Home';
import AboutScreen from './containers/About';
import PricesScreen from './containers/Prices';
import UserArea from './containers/UserArea';
import Documents from './containers/Documents';
import AuthFlow from './containers/AuthFlow';
import GuestRoute from './containers/Routes/GuestRoute.js';
import UserRoute from './containers/Routes/UserRoute.js';
import { Route } from "react-router-dom";
import {Elements, StripeProvider} from 'react-stripe-elements';
import PaymentForm from './components/PaymentForm'




class App extends Component {
  render() {
      const { location } = this.props;
    return (
        <StripeProvider apiKey="pk_test_TgVhMUQIt30yIvcJun4aMtoB">
        <div className="App">
          <Route exact path='/' component={ HomeScreen } />
          <Route exact path='/document' component={ Documents } />
          <Route exact path='/auth-flow' component={ AuthFlow } />
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
            <UserRoute
                location={ location }
                path="/payment"
                exact
                component={ PaymentForm }
            />
      </div>
        </StripeProvider>
    );
  }
}

export default App;
