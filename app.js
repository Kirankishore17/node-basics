// net ninja

// http
// const http = require('http');
// http.createServer((req, res) => {
//     res.writeHead(200, {'Context-Type': 'Application/JSON'});
//     var ob = {
//         "name":"kiran"
//     }
//     res.end(JSON.stringify(ob));
// }).listen(3000);

// express get request
// const express = require('express');
// var app = express();
// app.get("/", (req,res) => {
//     res.send('jhdskcn');
// })
// app.listen(3000);

// express body-parser
const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var body = bodyParser.json();

app.post('/', (req,res) => {
    console.log(req.url + "  " + req.json);
}).listen(3000);