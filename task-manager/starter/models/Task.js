const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const model = mongoose.model;

//const { Schema, model } = mongoose;

const taskSchema = new Schema({
    name: String,
    age: Number,
    completed: Boolean
});
const Task = model("Task", taskSchema);

module.exports = Task;