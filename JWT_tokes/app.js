require('dotenv').config()
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const notFoundHandler = require('./middleware/notFound')
const errorHandlerMid = require('./middleware/errorHandler');
const mainRoute = require('./route/mainRoute');

const port = process.env.PORT || 5000;

app.use(express.static('./public'))
app.use(express.json());

app.use('/api/v1', mainRoute);
app.use(notFoundHandler);
app.use(errorHandlerMid);

const startApp = async () => {
    try {
        // connect to db first
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

startApp();