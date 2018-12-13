const express =  require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes  =  require('./api/auth');
const contactRoutes  =  require('./api/contact/controller.js');
const paymentRoutes  =  require('./api/payment');



const app =  express();

mongoose.connect('mongodb://localhost/aliments');

mongoose.Promise = global.Promise;


app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());


app.use('/api', authRoutes);

app.use('/email', contactRoutes);

app.use('/payment', paymentRoutes);




app.use(function (err,req,res,next) {
    res.status(404).send({error:err.message});
});

app.listen(process.env.port || 4000,function() {
    console.log('Now listening on ports 5000Kaec');
});