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
} from './constans';


const defaultState = {
    user:{},
    fakeLogin:false,
    error:'',
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
                error:action.payload
            };
        case LOGOUT:
            return {
                ...state,
                user:{}
            };
        default:
            return state;
    }
}