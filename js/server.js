const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Your server is succesfully running!');
}).listen(3000, () => console.log('Server is running out'));
