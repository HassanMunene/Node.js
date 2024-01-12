const express = require('express');
const app = express();

app.get('/', (request, response) => {
    const method = request.method;
    const url = request.url;
    const time = new Date();
    console.log(method, url, time);
    response.send('Home')
})
app.get('/about', (request, response) => {
    const method = request.method;
    const url = request.url;
    const time = new Date();
    console.log(method, url, time);
    response.send('About');
})

app.listen(5003, () => {
    console.log('Hello friend im listening on port 5003...');
})
