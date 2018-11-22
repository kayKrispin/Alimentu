import thunk from 'redux-thunk';
import { applyMiddleware,createStore } from 'redux';
import logger from 'redux-logger';
import { combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as authReducer } from './modules/Auth/';


const reducers = {
    authReducer
};


export const store  = createStore(
    combineReducers( { ...reducers } ),
    composeWithDevTools(applyMiddleware(thunk,logger))
);