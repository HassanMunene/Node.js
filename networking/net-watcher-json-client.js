'use strict';

const net = require('net');
const client = net.connect({port: 60300});

client.on('connect', () => {
    console.log('client connected!');
})
client.on('data', (data) => {
    const message = JSON.parse(data);

    if (message.type === 'watching') {
        console.log(`Now watching ${message.file}`);
    } else if (message.type === 'changed') {
        const date = new Date(message.timestamp);
        console.log(`file changed: ${date}`);
    } else {
        console.log('Unrecognized message type.');
    }
});
client.on('end', () => {
    console.log('connection closed');
})
client.on('error', (err) => {
    console.log(`connection error: ${err}`);
})