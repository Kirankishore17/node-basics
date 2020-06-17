// net ninja

const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Context-Type': 'Application/JSON'});
    var ob = {
        "name":"kiran"
    }
    res.end(JSON.stringify(ob));
}).listen(3000);