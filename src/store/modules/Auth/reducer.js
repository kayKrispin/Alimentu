/*
root reducer
 */
import {
   FAKE_LOGIN
} from './constans';


const defaultState = {
    user:{},
    fakeLogin:false,
};

export default  (state = defaultState, action) => {
    switch (action.type) {
        case FAKE_LOGIN:
            return {
                ...state,
                fakeLogin:action.payload.login
            };
        default:
            return state;
    }
}