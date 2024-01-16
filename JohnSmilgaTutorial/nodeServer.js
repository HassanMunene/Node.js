const http = require('http');
const {readFileSync, read} = require('fs');

const homePage = readFileSync('./navbar-app/index.html')
const css = readFileSync('./navbar-app/style.css');
const js = readFileSync('./navbar-app/index.js');
const logo = readFileSync('./navbar-app/logo.svg');

const server = http.createServer((request, response) =>{
    const url = request.url;
    console.log(url);
    if (url === '/') {
        response.writeHead(200, {'content-type': 'text/html'});
        response.write(homePage);
        response.end();
    } else if (url === '/style.css') {
        response.writeHead(200, {'content-type': 'text/css'});
        response.write(css);
        response.end();
    } else if (url === '/index.js') {
        response.writeHead(200, {'content-type': 'text/javascript'});
        response.write(js);
        response.end();
    } else if (url === '/logo.svg') {
        response.writeHead(200, {'content-type': 'image/svg+xml'});
        response.write(logo);
        response.end();
    }
     else {
        response.writeHead(200, {'content-type': 'text/plain'})
        response.write('Page not found')
        response.end()
    }
});

server.listen(5003,()=>console.log('listening...'));
