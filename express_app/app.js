const http = require('http');
const circularJSON = require('circular-json');

http.createServer((request, response) =>{
    console.log('client hit the server');
    let req = circularJSON.stringify(request);
    response.writeHead(200, {'content-type':'text/html'});
    response.write(`<h1>yooo</h1>`);
    response.end()

}).listen(5003,()=>console.log('listening...'));
