import thunk from 'redux-thunk';
import { applyMiddleware,createStore } from 'redux';
import logger from 'redux-logger';
import { combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as authStore } from './modules/Auth/';
import { store as contactStore } from './modules/Contact/';
import { reducer as formStore } from "redux-form";
import { store as paymentStore } from './modules/Payment/';
import { store as documentsStore } from './modules/Documents/';





const reducers = {
    authStore,
    contactStore,
    paymentStore,
    documentsStore,
    form:formStore,
};


export const store  = createStore(
    combineReducers( { ...reducers } ),
    composeWithDevTools(applyMiddleware(thunk,logger))
);