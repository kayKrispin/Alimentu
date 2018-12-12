export const submitContactForm = (state, action) => {
    return {
        ...state,
        status:action.payload
        }
    };

