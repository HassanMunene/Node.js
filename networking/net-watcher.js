const fs = require('fs');
const net = require('net');
const filename = process.argv[2];

if (!filename) {
    throw Error('File name must be provided');
}

const server = net.createServer( (connection) => {
    console.log('client connected');
    connection.write(`Now watching "${filename}" for changes...\n`);

    const watcher = fs.watch(filename, () => {
        connection.write(`File changed: ${new Date()} \n`)
    });
    connection.on('close', () => {
        console.log('client disconnected');
        watcher.close();
    });
});

server.listen(60300, () => console.log('listening on port 60300...'));