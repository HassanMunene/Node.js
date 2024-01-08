const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello welcome to my first http server in Node');
    res.end();
})

server.listen(5003, () => console.log('listening...'));