export const createDocument = (state, action) => {
    const { title } = action.payload;
    return {
        ...state,
        documents: [
            ...state.documents,
            {
                ...action.payload.body,
                title: title,
                },
            ]
    }
};


export const getDocuments = (state, action) => {
    return {
        ...state,
        userDocuments:action.payload
    }
};


