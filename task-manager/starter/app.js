const express = require('express');
const app = express();
const tasksRoute = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config()
const notFound = require('./middleware/not_found');

const port = 5000;

//middleware
app.use(express.static('./public'));
app.use(express.json());

//routes
app.use('/api/v1/tasks', tasksRoute);
app.use(notFound);

const startServer= async () => {
    try {
        await connectDB(process.env.MONGO_URI2);
        app.listen(port, console.log(`Server listening on port ${port}...`));
    } catch (error) {
        console.log(`The errororororrrrrr: ${error}`);   
    }
}
startServer();