import {
    CREATE_NEW_DOCUMENT,
    GET_DOCUMENTS,
} from './constans';

import documentService from './service';

export const createDocument = (data) => ({
    type: CREATE_NEW_DOCUMENT,
    payload: data
});

export const getDocuments = (data) => ({
    type: GET_DOCUMENTS,
    payload: data
});


export const fetchDocuments = ({ userId }) => dispatch => {
    return documentService.getDocuments( userId ).then(res => res.json()).then((res) =>
        dispatch(getDocuments(res))
    );
};


export const createNewDocument = ({ userId, values, statementOfClaime }) => dispatch => {
    return documentService.createDocument({userId, values, statementOfClaime}).then(res => res.json()).then((res) =>
    dispatch(createDocument(res))
    );
};