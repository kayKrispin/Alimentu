const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const bcrypt = require('bcrypt');
const jwt  =  require("jsonwebtoken");
const config =  require('../config.js')

const UsersSchema = new Schema({

        firstName:{
            type:String,
            required:[true,'Name field is required'],
        },
        lastName:{
            type:String,
            required:[true,'Surname field is required'],
        },
        email:{
            type:String,
        },
        image: {
            type:String
        },
        agreement: {
            type:Boolean
        },
        captch: {
            type:String,
        },
        password: {
            type:String,
        },
        phone: {
            type:String,
        }

    }
);

const User = mongoose.model('user', UsersSchema);

User.setPassword = password => {
   return this.passwordHash = bcrypt.hashSync(password, 10);
};

User.isValidPassword = (password, encodedPassword) => {
    return bcrypt.compareSync(password, encodedPassword);
};

User.generateJWT =  (email) => {
    return jwt.sign(
        {
            email: email,
        },
        config.jwt_secret,
    );
};

module.exports = User;