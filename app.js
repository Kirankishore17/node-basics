// importing function from math.js
// const mathSum = require('./math');
// console.log('Hello world ' + mathSum(2,2));
// if more than one function/variable mathSum.sum(1,2) mathSum.pi

// event emitter 
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();
// eventEmitter.on('kk', () => {console.log('event emitter. !@')})
// eventEmitter.emit('kk')

// fs module
// const fs = require('fs');
// const readStream = fs.createReadStream('./ex1.txt', 'utf-8')
// const writeStream = fs.createWriteStream('ex2.txt')
//1. readStream.on('data', (ch) => writeStream.write(`// comments ${ch}`));
//2. readStream.pipe(writeStream);

// http module
// const http = require('http');
// const fs = require('fs')
// http.createServer((req, res) => {
//     const stream = fs.createReadStream('./ex.json')
//     res.writeHead(200, {'Content-type':'application/json'})
//     stream.pipe(res)
// }).listen(3000);

// Express 
const express = require('express');
const app = express();
app.get('/', (req,res) => {
    res.send('hello world')
})
app.get('/kk/:name', (req,res) => {
    res.send('kk')
    console.log(req.params)
})
app.listen(3000);

