
const express = require('express');
const service  = require('./service');
const router = express.Router();
const config  = require('../../config');



router.post('/contact',  async (req,res,next) => {

    const { data } = req.body

    return await service.sendEmail({
        to: config.fromEmail,
        tamplateId:'mainStatmentOfClaim',
        data: data ,
        subject: 'Statment of Claim',
    }).then(() => {
        res.json({success:'complete'});
    }).catch(e=>console.log('error',e));
});

module.exports = router;