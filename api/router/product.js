const express = require('express');
const Product = require('../model/product');
const mongoose = require('mongoose')
const app = express();

console.log('products.....................')
// Return Products
app.get('/', (req, res) => {
    console.log('get product')
    res.status(200).json({
        message: " get product/"
    })
})

// Add new Product
app.post('/', (req, res) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price : req.body.price
    });
    product
        .save()
        .then(result => console.log(result))
        .catch(err => console.log(err));
    res.status(200).json({
        message: " post product/",
        productName: product.name
    })
})

// Modify product with :id
app.patch('/:id', (req, res) => {
    var id = req.params.id;
    res.status(200).json({
        message: ` patch id: ${id}`
    });
})

// Delete product with :id
app.delete('/:id', (req, res) => {
    var id = req.params.id;
    res.status(200).json({
        message: `delete id ${id}`
    });
})

module.exports = app;