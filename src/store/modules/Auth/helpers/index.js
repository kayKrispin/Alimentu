import socialService from '../services/socialServices';
import authService from '../services/authServices';

import ouathVerification from '../../../../server/src/services/ouathVerification';


export default ( () => {
   const socialLoginHandler = (network, scope,dispatch, socialLogin) =>
       socialService(network).login({ scope }).then(res=>{ return res.authResponse.access_token}).then(accessToken => {
        return ouathVerification(network).verifyUser({accessToken}).then(data => {return authService().loginRegisterSocial(data)
        }).then(res => res.json()).then(user => {
            console.log('hello',user)
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

    const populateLocalStorage = (user) => {
        if(user.user) {
            const { user: { firstName, email, image }, token } = user;
            localStorage.name = firstName;
            localStorage.email = email;
            localStorage.image = image || 'https://www.plc.if.ua/wp-content/uploads/2016/08/pi.jpg';
            localStorage.token = token;
        }else{
            localStorage.name = user.firstName;
            localStorage.image = user.image
        }
    };

    return {
        socialLoginHandler,
        createAccountHandler,
        loginHandler,
    }
});