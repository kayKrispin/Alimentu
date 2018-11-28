import {
   FAKE_LOGIN
} from './constans';

export const fakeLogin = ( login ) => ({
    type: FAKE_LOGIN,
    payload: { login },
});