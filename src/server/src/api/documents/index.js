const express = require('express');
const router = express.Router();
const Documents = require('../../models/documents');


router.post("/create", async (req, res) => {

    const date = new Date().toISOString().slice(0,19);
    console.log('data',date);

   const newDocument = await Documents
       .create({body: req.body.values, userId:req.body.userId,
           title:req.body.statementOfClaime, data:date });

   res.status(200).send(newDocument)
});

router.get("/get/:id", async (req, res) => {

    const id = req.params.id;
    const documents = await Documents.find({userId: id})

    res.send(documents);
});


module.exports = router;