import thunk from 'redux-thunk';
import { applyMiddleware,createStore } from 'redux';
import logger from 'redux-logger';
import { combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as authStore } from './modules/Auth/';


const reducers = {
    authStore
};


export const store  = createStore(
    combineReducers( { ...reducers } ),
    composeWithDevTools(applyMiddleware(thunk,logger))
);