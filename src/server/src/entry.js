const express =  require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes  =  require('./api/auth');
const cors = require('cors');



const app =  express();

mongoose.connect('mongodb://localhost/aliments');

mongoose.Promise = global.Promise;

app.use(cors());

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());


app.use('/api',apiRoutes);



app.use(function (err,req,res,next) {
    res.status(404).send({error:err.message});
});

app.listen(process.env.port || 4000,function(){
    console.log('Now listening on ports 5000Kaec');
});