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
        },
        statementsOfClaim:[
            {
                body: String
            }
        ]

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

User.generateConfirmationJWT =  (_id) => {
    return jwt.sign(
        {
            _id: _id,
        },
        config.jwt_secret,
        { expiresIn: "1h" }
    );
};

User.generateResetPasswordLink = (id) =>{
    const reset = 'reset'
    console.log('this')
    return `<a href='http://localhost:3000/reset-password/${User.generateConfirmationJWT(id)}'>
        https://localhost:3000/reset-password/form=reset&resetToken=${User.generateConfirmationJWT(id)}</a>`
};

module.exports = User;