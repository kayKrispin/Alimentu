import facebookVerification from './facebookVerification';
import googleVerification from './googleVerification';

export default (network) => {
    const verifications = {
        facebook: facebookVerification,
        google: googleVerification,
    };

    return verifications[network]();
};
