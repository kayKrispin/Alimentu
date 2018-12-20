/*
root reducer
 */
import {
   LOGIN_SOCIAL,
   LOGOUT,
   LOGGED_IN,
   CREATE_ACCOUNT,
   ERROR,
   LOGIN,
   REQUST_RESETPASSWORD_LINK,
   CONFIRM_RESET_PASSWORD_LINK,
   CHANGE_PASSWORD,
} from './constans';


const defaultState = {
    user: {},
    fakeLogin: false,
    error: '',
    errType: '',
    requestResetPassword: '',
    confirmResetPassword: '',
    passwordChanged:''
};

export default  (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user:action.payload.user,
                error:'',
            };
        case LOGIN_SOCIAL:
            return {
                ...state,
                user:action.payload
            };
        case CREATE_ACCOUNT:
            return {
                ...state,
                user:action.payload.user,
                error:'',
            };
        case LOGGED_IN:
            return {
                ...state,
                user:action.payload
            };
        case ERROR:
            return {
                ...state,
                error:action.payload,
                errType:action.errType,
            };
        case LOGOUT:
            return {
                ...state,
                user:{}
            };
        case REQUST_RESETPASSWORD_LINK:
            return {
                ...state,
                requestResetPassword: action.payload
            };
        case CONFIRM_RESET_PASSWORD_LINK:
            return {
                ...state,
                confirmResetPassword: action.payload
            };
        case CHANGE_PASSWORD:
            return {
                ...state,
                passwordChanged: action.payload
            };
        default:
            return state;
    }
}