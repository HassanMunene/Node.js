const mongoose = require('mongoose');

const connectionString = 
'mongodb+srv://hassan:munene14347@cluster0.hj8uat2.mongodb.net/TASK-MANAGER-APP?retryWrites=true&w=majority'

const connectDB = (url) => {
    return mongoose.connect(connectionString);
}

module.exports = connectDB;