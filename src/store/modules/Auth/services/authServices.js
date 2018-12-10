export default () => {

   const loginRegisterSocial = (data) =>{
       return fetch('/api/auth/socialLogin',{
           method:'post',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(data),
       })
   };
    const createAccount = (signupData) => {
        return fetch('/api/auth/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signupData),
        });
    };

    const login = (data) =>{
        return fetch('/api/auth/login',{
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        })
    };

   return {
        loginRegisterSocial,
        createAccount,
        login,
   }
}