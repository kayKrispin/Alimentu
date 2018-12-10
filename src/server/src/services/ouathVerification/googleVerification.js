import fetch from 'isomorphic-fetch';


export default () => {
    const userInfoUri = 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=';


    const verifyUser = ({ accessToken }) => {
        return fetch(`${userInfoUri}${accessToken}`)
            .then(res => res.json())
            .then((payload) => {
                return {
                    id: payload.id,
                    firstName: payload.given_name,
                    lastName: payload.family_name,
                    image: payload.picture,
                    email: payload.email,
                };
            });
    };

    return { verifyUser };
};

