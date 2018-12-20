import React, { Component } from 'react';
import "./styles/css/styles.css";
import 'antd/dist/antd.css';
import HomeScreen from './containers/Home';
import AboutScreen from './containers/About';
import PricesScreen from './containers/Prices';
import Documents from './containers/Documents';
import AuthFlow from './containers/AuthFlow';
import GuestRoute from './containers/Routes/GuestRoute.js';
import UserRoute from './containers/Routes/UserRoute.js';
import { Route } from "react-router-dom";
import { StripeProvider} from 'react-stripe-elements';
import PaymentForm from './components/PaymentForm';
import UserArea from './containers/UserArea';
import TermsScreen from './containers/Terms';
import ResetPassword from './containers/ResetPassword';






class App extends Component {
  render() {
      const { location } = this.props;
    return (
        <StripeProvider apiKey="pk_test_TgVhMUQIt30yIvcJun4aMtoB">
        <div className="App">

            <Route exact path='/' component={ HomeScreen } />
            <Route exact path='/auth-flow' component={ AuthFlow } />

            <UserRoute
                location={ location }
                path="/document"
                exact
                component={ Documents }
            />
            <UserRoute
                location={ location }
                path="/profile"
                exact
                component={ UserArea }
            />
            <GuestRoute
                location={ location }
                path="/about"
                exact
                component={ AboutScreen }
            />
            <GuestRoute
                location={ location }
                path="/terms"
                exact
                component={ TermsScreen }
            />
            <UserRoute
                location={ location }
                path="/prices"
                exact
                component={ PricesScreen }
            />
            <UserRoute
                location={ location }
                path="/payment"
                exact
                component={ PaymentForm }
            />
            <UserRoute
                location={ location }
                path="/reset-password"
                exact
                component={ ResetPassword }
            />
      </div>
        </StripeProvider>
    );
  }
}

export default App;
