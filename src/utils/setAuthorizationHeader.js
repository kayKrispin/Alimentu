const fetch =require("axios");

module.exports = (token = null) => {
    if (token) {
        fetch.default.head.defaults.headers.common.authorization = `Bearer ${token}`;
    } else {
        delete fetch.defaults.headers.common.authorization;
    }
};
