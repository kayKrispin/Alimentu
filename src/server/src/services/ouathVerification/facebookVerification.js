import FB from 'fb';

export default () => {
    const verifyUser = ({ accessToken }) => new Promise((resolve, reject) => {
        FB.api('me', { fields: ['id', 'first_name', 'last_name', 'email', 'picture'], access_token: accessToken }, (payload) => {
            resolve({
                id: payload.id,
                firstName: payload.first_name,
                lastName: payload.last_name,
                image: payload.picture.data.url,
                email: payload.email,
            });
        });
    });

    return { verifyUser };
};
