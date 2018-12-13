const stripe = require("stripe")("sk_test_noCojBv3gBFtcpLQC01c0Bfl");
const express = require('express');
const router = express.Router();

router.post("/charge", async (req, res) => {
    console.log('reqbody',req.body.id)
    try {
        let {status} = await stripe.charges.create({
            amount: 100,
            currency: "usd",
            description: "An example charge",
            source: req.body.id
        });

        res.json({status});
    } catch (err) {
        res.status(500).json({error:'Something goes wworng'}).end();
    }
});

module.exports = router;