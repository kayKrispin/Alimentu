import thunk from 'redux-thunk';
import { applyMiddleware,createStore } from 'redux';
import logger from 'redux-logger';
import { combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as authStore } from './modules/Auth/';
import { reducer as formReducer } from "redux-form";




const reducers = {
    authStore,
    form:formReducer,
};


export const store  = createStore(
    combineReducers( { ...reducers } ),
    composeWithDevTools(applyMiddleware(thunk,logger))
);