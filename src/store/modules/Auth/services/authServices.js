import  { fetchWrapper } from '../../../../utils/setAuthorizationHeader';

export default () => {
   const loginRegisterSocial = (data) =>{
       return fetchWrapper('/api/auth/socialLogin',data)
   };
    const createAccount = (signupData) => {
        return fetchWrapper('/api/auth/register',signupData);
    };

    const login = (data) =>{
        return fetchWrapper('/api/auth/login',data);
    };

   return {
        loginRegisterSocial,
        createAccount,
        login,
   }
}