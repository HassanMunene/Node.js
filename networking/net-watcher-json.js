const fs = require('fs');
const net = require('net');
const filename = process.argv[2];

if (!filename) {
    throw Error('filename must be provided');
}

const server = net.createServer((connection) => {
    console.log('client connected');
    connection.write(JSON.stringify({type: 'watching', file: filename}) + '\n');

    const watcher = fs.watch(filename, () => {
        connection.write(JSON.stringify({type: 'changed', timestamp: Date.now()}) + '\n');
    });
    
    connection.on('close', () => {
        console.log('client disconnnected');
        watcher.close();
    });
});

server.listen(60300, () => console.log('listening...'));