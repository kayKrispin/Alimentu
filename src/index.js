import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store/createStore';
import { Route } from "react-router-dom";



ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Route component={App}/>
        </Provider>
    </Router>,
    document.getElementById('root'));

