import  { fetchWrapper } from '../../../../utils/setAuthorizationHeader';

export default () => {
   const loginRegisterSocial = (data) =>{
       return fetchWrapper('/api/auth/socialLogin', data , 'post')
   };
    const createAccount = (signupData) => {
        return fetchWrapper('/api/auth/register', signupData, 'post');
    };

    const login = (data) =>{
        return fetchWrapper('/api/auth/login', data, 'post');
    };

    const requestResetPasswordLink = (data,_id) =>{
        return fetchWrapper('/api/auth/reset_password_link', {email:data, _id:_id}, 'post');
    };

    const validateToken =  token =>{
        return fetchWrapper('/api/auth/validate_token', { token }, 'post');
    };

    const resetPassword =  (password, token ) =>{
        return fetchWrapper('/api/auth/reset_password', { password, token }, 'post');
    };

    return {
        loginRegisterSocial,
        createAccount,
        login,
        requestResetPasswordLink,
        validateToken,
        resetPassword
   }
}