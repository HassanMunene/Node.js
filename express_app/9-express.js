const express = require('express');
const app = express();

const middleware = (request, response, next) => {
    const method = request.method;
    const url = request.url;
    const time = new Date();
    console.log(method, url, time);
    next();
}
app.get('/', middleware, (request, response) => {
    response.send('Home')
})
app.get('/about', middleware, (request, response) => {
    response.send('About');
})

app.listen(5003, () => {
    console.log('Hello friend im listening on port 5003...');
})
