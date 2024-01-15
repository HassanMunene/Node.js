const express = require('express');
const tasksRoute = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config()

const app = express();
const port = 5000;

// app.get('/', (req, res)=> {
//     res.send('Task manager application')
// })
app.use(express.json());

app.use('/api/v1/tasks', tasksRoute);
app.get('/hello', (req, res)=> {
    res.send('Hello there mate')
})

const startDB = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log('Server listening on port 5000...'));
    } catch (error) {
        console.log(`The errororororrrrrr: ${error}`);   
    }
}
startDB();