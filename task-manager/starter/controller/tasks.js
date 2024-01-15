const Task = require('../models/model');
const getAllTasks = (req, res) => {
    res.send('get all the tasks');
}
const getTask = (req, res) => {
    res.send('get single task');
}
const createTask = (req, res) => {
    const task = Task.create(req.body);
    res.status(201);
    res.json({ task });
}
const updateTask = (req, res) => {
    res.send('update task');
}
const deleteTask = (req, res) => {
    res.send('delete a task');
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
}