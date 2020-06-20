const http = require('http');
const express = require('./api/expressresourse');
const port = 3000;

const server = http.createServer(express);
server.listen(port);