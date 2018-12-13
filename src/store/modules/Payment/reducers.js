export const paymentCharge = (state, action) => {
    return {
        ...state,
        status: action.payload.status
    }
};


export const finishStep = (state, action) => {
    return {
        ...state,
        finishStep: action.payload
    }
};

