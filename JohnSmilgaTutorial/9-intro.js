const eventEmitter = require('events');

const customEvent = new eventEmitter();

customEvent.on('response', () => {
    console.log('data received');
})
customEvent.emit('response');