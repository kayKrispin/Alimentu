import config from '../../../../server/src/config';
import hello from 'hellojs';

// Initiialize hello and export
export default (() => {
    // Only perform below on client
    if (typeof window === 'undefined') {
        return;
    }


    hello.init({
        facebook: config.facebookAppId,
        google: config.googleAppId,
    }, {
        redirect_uri: 'http://localhost:3000/auth-flow',
        oauth_proxy: 'https://auth-server.herokuapp.com/proxy',
        response_type: 'code',
    });

    return hello;
})();
