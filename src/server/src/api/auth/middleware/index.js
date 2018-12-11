const  jwt  =  require("jsonwebtoken");
const User = require('../../../models/users')
const config =  require('../../../config.js')

module.exports =  (req, res, next) => {
    const header = req.headers.authorization;
    let token;

    if (header) token = header.split(" ")[1];

    if (token) {
        jwt.verify(token, config.jwt_secret, (err, decoded) => {
            if (err) {
                res.status(401).json({ errors: { global: "Invalid token" } });
            } else {
                User.findOne({ email: decoded.email }).then(user => {
                    req.currentUser = user;
                    next();
                });
            }
        });
    } else {
        res.status(401).json({ errors: { global: "No token" } });
    }
};
