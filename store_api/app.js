require('dotenv').config();
const express = require('express');
const app = express();
const notFoundMiddleware = require('./middleware/not_found');
const errorHandlerMiddleware = require('./middleware/error_handler');
const connectDB = require('./db/connect_db');
const port = process.env.PORT || 5000

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>STORE API</h1>')
})

// products routes

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        // connect to the db
        app.listen(port, console.log(`Server listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}
start();