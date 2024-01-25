require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connect');
const notFoundMiddleware = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');


const app = express();
const port = process.env.PORT;

app.use(express.static('./public'))
app.use(express.json());

//routes
const jobsRoute = require('./routes/jobsRoute');
const authRoute = require('./routes/authRoute');
app.use('/api/v1/jobs', jobsRoute);
app.use('/api/v1/auth', authRoute);

app.get('/hello', (req, res) => {
    res.status(200).json({msg: "hello there mate"});
})
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const startApp = async () => {
    try {
        // first connect application to the database and spin up the server
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}
startApp();