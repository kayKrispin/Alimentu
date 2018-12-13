import  { fetchWrapper } from '../../../utils/setAuthorizationHeader';

export default (() => {
    const charge = ( data ) => {
        return fetchWrapper('/payment/charge', data);
    };
    return { charge };
})();
