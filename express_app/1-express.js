const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('HOME PAGE BABY')
})
app.get('/about', (request, response) => {
    response.send('About page')
})
app.all('*', (request, response) => {
    response.status(404);
    response.send('<h1>Resource not found</h1>')
})

app.listen(5003, () => {
    console.log('server is listening on port 5003...');
})