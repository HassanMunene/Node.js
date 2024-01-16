const Task = require('../models/Task');


const getAllTasks = (req, res) => {
    res.send('get all the tasks');
}
const getTask = (req, res) => {
    res.send('get single task');
}
const createTask = async (req, res) => {
    const task1 = new Task(req.body);
    await task1.save();
    res.status(201);
    res.json({ task1 });
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