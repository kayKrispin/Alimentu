
import {
    SEND_CHARGE,
    FINISH_CHARGE_AND_SENT_EMAIL,
} from './constans';

import paymentService from './services';

export const charge = (res) => ({
    type: SEND_CHARGE,
    payload: res
});


export const finishCharge = (nextStep) => ({
    type: FINISH_CHARGE_AND_SENT_EMAIL,
    payload: nextStep
});



export const paymentCharge = async (data) => {
    const response = await paymentService.charge(data);

    if(response) {
        return response.json()
    };
};