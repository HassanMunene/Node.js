const http = require('http');
const {readFileSync} = require('fs');

const homePage = readFileSync('./index.html')

const server = http.createServer((request, response) =>{
    console.log('client hit the server');
    const url = request.url;
    if (url === '/') {
        response.writeHead(200, {'content-type': 'text/html'});
        response.write(homePage);
        response.end();
    } else {
        response.writeHead(200, {'content-type': 'text/plain'})
        response.write('Page not found')
        response.end()
    }
});

server.listen(5003,()=>console.log('listening...'));
