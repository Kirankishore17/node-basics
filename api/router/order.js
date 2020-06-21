const express = require('express');

const app = express.Router();

// Return order details
app.get('/', (req,res) => {
    res.status(200).json({details: `get order`})
})

// Add new order
app.post('/', (req,res) => {
    const order = req.body;
    res.status(200).json(
        {details: `post order`,
        orderId: order.id});
})

// Update order with :id
app.patch('/:id', (req,res) => {
    res.status(200).json({details: `patch order ${req.params.id}`})
})

// Delete order with :id
app.delete('/:id', (req,res) => {
    res.status(200).json({details: `delete order ${req.params.id}`})
})

module.exports = app;