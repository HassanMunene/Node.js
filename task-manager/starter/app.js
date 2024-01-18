const express = require('express');
const expressListEndpoints = require('express-list-endpoints');
const app = express();
const tasksRoute = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config()

const port = 5001;
app.use(express.static('./public'));
app.use(express.json());

// app.get('/task.html', (req, res) => {
//     res.send('yooo');
// })

app.use('/api/v1/tasks', tasksRoute);
console.log(expressListEndpoints(app));

const startServer= async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log('Server listening on port 5001...'));
    } catch (error) {
        console.log(`The errororororrrrrr: ${error}`);   
    }
}
startServer();