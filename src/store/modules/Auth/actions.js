import {
    LOGIN_SOCIAL,
    LOGOUT,
    LOGGED_IN,
    CREATE_ACCOUNT,
    ERROR,
    LOGIN,
    REQUST_RESETPASSWORD_LINK,
} from './constans';

import helperAuth from './helpers';

export const socialLogin = ( data ) => ({
    type: LOGIN_SOCIAL,
    payload: data,
});

export const loggedIn  = (data) => ({
    type: LOGGED_IN,
    payload: data,
});

export const accountCreation  = (data) => ({
    type: CREATE_ACCOUNT,
    payload: data,
});

export const login = signInData => ({
    type: LOGIN,
    payload: signInData,
});

export const logout  = () => ({
    type: LOGOUT,
});

export const error = (err,type) => ({
    type: ERROR,
    payload: err,
    errType:type,
});

export const requestResetLink  = () => ({
    type: REQUST_RESETPASSWORD_LINK,
});

// Log in
export const loginUser = signInData => dispatch => {
    return helperAuth().loginHandler(signInData,dispatch,login,error);
};

// Create new account
export const createAccount = signupData => dispatch => {
    return helperAuth().createAccountHandler(signupData,dispatch,accountCreation,error);
};


// Social sign in
export const loginSocial = ({ network, scope }) => dispatch => {
    return helperAuth().socialLoginHandler(network, scope,dispatch, socialLogin);
};

//Request reset-password link
export const requestResetPassLink = (email, _id) => dispatch => {
    return helperAuth().requestResetPasswordHandler(email, _id, dispatch, requestResetLink);
};