const os = require('os');
const path = require('path');

//useful info about the current user

const user = os.userInfo();
console.log(user);

console.log(`The system uptime is: ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(currentOS);
