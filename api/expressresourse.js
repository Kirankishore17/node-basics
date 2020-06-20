const express = require('express');
const productRoute = require('./router/product');
const orderRoute = require('./router/order');

const app = express();

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