const http = require('http');

http.createServer((request, response) =>{
    response.end('HELLO THERE');

}).listen(5003,()=>console.log('listening...'));
