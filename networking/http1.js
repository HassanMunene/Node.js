const http  = require('http') // get the http module

const server = http.createServer((request, response) => {
    response.writeHead( 200, {'Content-Type': 'text/plain'});
    response.write('Hello wordl');
    response.end()
})
server.listen(5003);