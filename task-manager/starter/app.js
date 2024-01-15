require('./db/connect')
const express = require('express');
const tasksRoute = require('./routes/tasks');

const app = express();
const port = 5000;

// app.get('/', (req, res)=> {
//     res.send('Task manager application')
// })
app.use('/api/v1/tasks', tasksRoute);
app.get('/hello', (req, res)=> {
    res.send('Hello there mate')
})

app.listen(port, () => {
    'Server listening on port 5000...'
})