import socialService from '../services/socialServices';
import authService from '../services/authServices';

import ouathVerification from '../../../../server/src/services/ouathVerification';


export default ( () => {
   const socialLoginHandler = (network, scope,dispatch, socialLogin) =>
       socialService(network).login({ scope }).then(res=>{ return res.authResponse.access_token}).then(accessToken => {
        return ouathVerification(network).verifyUser({accessToken}).then(data => {return authService().loginRegisterSocial(data)
        }).then(res => res.json()).then(user => {
          populateLocalStorage(user);
            dispatch(socialLogin(user))})
    });


    const createAccountHandler = (signupData,dispatch,accountCreation,error) =>
        authService().createAccount(signupData).then(res => res.json()).then(data => {
            if(data.error) {
                const err = data.error;
                dispatch(error(err))
            } else {
                populateLocalStorage(data);
                dispatch(accountCreation(data));
            }
        }
    );

    const loginHandler = (signInData,dispatch,login,error) =>
        authService().login(signInData).then(res => res.json()).then(data => {
            if(data.error) {
                const err = data.error;
                dispatch(error(err))
            } else {
                populateLocalStorage(data);
                dispatch(login(data));
            }
        });

    const populateLocalStorage = (user) => {
        if(user.user) {
            const { user: { firstName, email, image }, token } = user;
            localStorage.name = firstName;
            localStorage.email = email;
            localStorage.image = image;
            localStorage.token = token;
        }
    };

    return {
        socialLoginHandler,
        createAccountHandler,
        loginHandler,
    }
});