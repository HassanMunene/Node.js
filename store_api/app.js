require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const notFoundMiddleware = require('./middleware/not_found');
const errorHandlerMiddleware = require('./middleware/error_handler');
const connectDB = require('./db/connect_db');
const productsRouter = require('./routes/productsRoute');

const port = process.env.PORT || 5000
const url = process.env.MONGO_URI2

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>STORE API</h1>')
})

app.use('/api/v1/products', productsRouter);
// products routes

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        // connect to the db
        await connectDB(url);
        app.listen(port, console.log(`Server listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}
start();