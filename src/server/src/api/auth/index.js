const express = require('express');
const User = require('../../models/users');
const authenticated = require('./middleware')
const router = express.Router();
const service  = require('./services');
const config  = require('../../config');
const jwt  =  require("jsonwebtoken");




router.use(authenticated)

router.post('/auth/login', async (req,res,next) => {
    const { email,password } = req.body;
    const user  = await User.findOne({email:email});
    try{
        if(user!==null && User.isValidPassword(password,user.password)) {
            res.json({user, token: User.generateJWT(email)})
        }else{
            throw new Error('Invalid email or password')
        }
    } catch (e) {
        res.status(404).json({error:'Invalid email or password'})
    }
});

router.post('/auth/register',  async (req,res,next) => {
    const { email,password } = req.body;
        const duplicate = await User.findOne({email: email});

        const hashPass =   User.setPassword(password);
        req.body.password = hashPass;

        try {
            if(duplicate) {
                throw new Error('This email is already taken');
            } else {
                const user = await User.create(req.body);
                res.json({user, token: User.generateJWT(email)})
            }
        } catch (e) {
            res.status(404).json({error:'This email is already taken'})
        }
});


router.post('/auth/socialLogin',  async (req,res,next) => {
    const { email } = req.body
    const user  = await User.findOne({email: email});
    if(user!==null) {
        res.send(user);
    } else {
        const newUser = await User.create(req.body);
        res.send(newUser)
    }
});


router.post('/auth/reset_password_link',  async (req,res,next) => {
    const { email } = req.body;

    const user = await User.find({_id: req.body._id});

    if( user ) {
        return await service.sendEmail({
            to: email,
            from:'tara@mail.ru',
            html:`Щоб відновити пароль перейдіть за цим посиланням </br>
                ${User.generateResetPasswordLink(req.body._id)} `,
            subject: 'Посиланя для зміни пароля',
        }).then(() => {
            res.json({success:'complete'});
        }).catch(e=>console.log('error',e));
    }
});

router.post("/auth/validate_token", (req, res) => {
    jwt.verify(req.body.token, config.jwt_secret, err => {
        if (err) {
            res.status(401).json({error:'Посилання втратило силу.Надішліть запит повторно на ваш емейл'});
        } else {
            res.json({});
        }
    });
});


router.post("/auth/reset_password", (req, res) => {

    console.log(req.body)
    const { password, token } = req.body;
    jwt.verify(token, config.jwt_secret, (err, decoded) => {
        if (err) {
            res.status(401).json({ errors: { global: "Invalid token" } });
        } else {
            User.findOne({ _id: decoded._id }).then(user => {
                if (user) {
                    console.log('us',user)
                    const newPasword =  User.setPassword(password);
                    user.update({password:newPasword}).then(()=>res.json({}))
                } else {
                    res.status(404).json({ errors: { global: "Invalid token" } });
                }
            });
        }
    });
});


module.exports = router;
