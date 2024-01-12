const exp = require('constants');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'));

// app.get('/', (request, response) => {
//     response.sendFile(path.resolve(__dirname, './index.html'));
// })

app.all('*', (request, response) => {
    response.status(404);
    response.send('<h1>Whatever you are looking for you will get it eventually</h1><br/>')
})

app.listen(5003, () => {
    console.log('Boy im listening on port 5003...')
})