const express = require('express');
const { people } = require('./data');

const app = express();

app.use(express.static('./methods-public'));

// app.get('/api/people', (request, response) => {
//     response.status(200);
//     response.json({success: true, data: people});
// })
app.post('/login', (request, response) => {
    response.send('<h1>Heyy there</h2>')
})
app.get('/', (request, response) => {
    response.send('client connected');
})

app.listen(5003, () => {
    console.log('Hello friend im listening on port 5003...');
})
