const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoute = require('./router/product');
const orderRoute = require('./router/order');

const app = express();
mongoose.connect('mongodb+srv://admin:admin@NewCluster-jujxf.mongodb.net/NewCluster?retryWrites=true&w=majority', { useUnifiedTopology /* useNewUrlParser  useMongoClient */: true, useNewUrlParser : true})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Handling CORS 
app.use((req, res) => {
    res.header("Access-Control-Allow-Origin", '*')
    res.header("Access-Control-Allow-Headers", '*')
    // Origin, X-Requested-With, Content-Type, Accept, Authorization    

    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, PATCH")
        return res.status(200).json({});
    }
})

// Routes /product/**
app.use('/product', productRoute);

// Routes /order/**
app.use('/order', orderRoute);

// Any other route
app.use((req, res, next) => {
    console.log("error");
    res.status(404).json({error:"404 error"});
});

module.exports = app;