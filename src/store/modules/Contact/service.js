import  { fetchWrapper } from '../../../utils/setAuthorizationHeader';

export default (() => {
    const submitForm = ( data ) => {
        return fetchWrapper('/email/contact', {data:data})
    };
    return { submitForm };
})();
