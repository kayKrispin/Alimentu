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
                const type = 'register';
                dispatch(error(err,type))
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
                const type = 'login';
                dispatch(error(err,type))
            } else {
                populateLocalStorage(data);
                dispatch(login(data));
            }
        });

    const requestResetPasswordHandler = (email,_id, dispatch,requestResetLink) =>
        authService().requestResetPasswordLink(email, _id).then(res => res.json()).then(data => {
            dispatch(requestResetLink(data)
            )});


    const populateLocalStorage = (user) => {
        if(user.user) {
            const { user: { firstName, email, image,_id }, token } = user;
            localStorage.name = firstName;
            localStorage.email = email;
            localStorage.image = image || 'https://www.plc.if.ua/wp-content/uploads/2016/08/pi.jpg';
            localStorage.token = token;
            localStorage._id = _id;
        } else {
            localStorage.name = user.firstName;
            localStorage.lastName = user.lastName;
            localStorage.email = user.email;
            localStorage.image = user.image
            localStorage._id = user._id
        }
    };

    return {
        socialLoginHandler,
        createAccountHandler,
        loginHandler,
        requestResetPasswordHandler
    }
});