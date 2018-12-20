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

User.generateJWT =  (_id) => {
    return jwt.sign(
        {
            _id: _id,
        },
        config.jwt_secret,
    );
};

User.generateResetPasswordLink = (email) =>{
    console.log('this')
    return `https://localhost:3000/reset-password/${User.generateJWT(email)}`
};

module.exports = User;