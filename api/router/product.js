const express = require('express');

const app = express();

// Return Products
app.get('/', (req, res) => {
    res.status(200).json({
        message: " get product/"
    })
})

// Add new Product
app.post('/', (req, res) => {
    res.status(200).json({
        message: " post product/"
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