const express = require('express');
const app = express();
const tasksRoute = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config()

const port = 5000;
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', tasksRoute);

const startServer= async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log('Server listening on port 5000...'));
    } catch (error) {
        console.log(`The errororororrrrrr: ${error}`);   
    }
}
startServer();