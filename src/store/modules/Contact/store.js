import {
    SUBMIT_CONTACT_FORM,
} from './constans';

import {
    submitContactForm,
} from './reducers';

const defaultState = {
    status: ''
};

// Root reducer
export default (state = defaultState, action) => {
    switch (action.type) {
        case SUBMIT_CONTACT_FORM:
            return submitContactForm(state,action)
        default:
            return state;
    }
};