import {
    CREATE_NEW_DOCUMENT,
    GET_DOCUMENTS,
} from './constans';

import {
    createDocument,
    getDocuments,
} from './reducers';

const defaultState = {
    documents : [],
    userDocuments:[],
};

// Root reducer
export default (state = defaultState, action) => {
    switch (action.type) {
        case CREATE_NEW_DOCUMENT:
            return createDocument(state,action);
        case GET_DOCUMENTS:
            return getDocuments(state,action);
        default:
            return state;
    }
};