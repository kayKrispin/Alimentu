import  { fetchWrapper } from '../../../utils/setAuthorizationHeader';

export default ( () => {
    const createDocument = ( data ) => {
        return fetchWrapper('/documents/create', data, 'post' )
    };

    const getDocuments = ( id ) => {
        return fetchWrapper(`/documents/get/${id}`, undefined, 'get')
    };

    return {
        createDocument,
        getDocuments,
    };
})();
