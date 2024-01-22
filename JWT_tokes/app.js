require('dotenv').config()
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello there mate');
})


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