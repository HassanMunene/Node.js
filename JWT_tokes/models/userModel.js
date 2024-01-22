const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'you have to provide a username man']
    },
    password: {
        type: String,
        required: [true, 'you have to provide a password mate']
    }
})

const User = model('User', userSchema);

module.exports = User;