const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const model = mongoose.model;

//const { Schema, model } = mongoose;

const taskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxLength: [30, 'name should not be more than 30 chars'] 
    },
    age: Number,
    completed: {
        type: Boolean,
        default: false
    }
});
const Task = model("Task", taskSchema);

module.exports = Task;