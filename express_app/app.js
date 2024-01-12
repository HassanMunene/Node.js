const express = require('express');
const { people } = require('./data');

const app = express();

app.get('/api/people', (request, response) => {
    response.status(200);
    response.json({success: true, data: people});
})

app.listen(5003, () => {
    console.log('Hello friend im listening on port 5003...');
})
