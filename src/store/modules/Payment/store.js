import {
    SEND_CHARGE,
    FINISH_CHARGE_AND_SENT_EMAIL
} from './constans';

import {
    paymentCharge,
    finishStep,
} from './reducers';

const defaultState = {
    status: '',
    finishStep:'',
};

// Root reducer
export default (state = defaultState, action) => {
    switch (action.type) {
        case SEND_CHARGE:
            return paymentCharge(state,action)
        case FINISH_CHARGE_AND_SENT_EMAIL:
            return finishStep(state,action)
        default:
            return state;
    }
};