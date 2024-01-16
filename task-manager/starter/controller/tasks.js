const Task = require('../models/Task');


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200)
        res.json({tasks: tasks});
    } catch (error) {
        res.status(500);
        res.json({msg: error});
    }
}
const getTask = async (req, res) => {
    try {
        const taskID = req.params.id;
        const task = await Task.findOne({_id: taskID});

        if(task) {
            return res.status(200).json({task: task});
        } else {
            return res.status(404).json({'msg': `No task with id: ${taskID}`});
        }
    } catch (error) {
        res.status(500);
        res.json({msg: error});
    }
}
const createTask = async (req, res) => {
    const task1 = new Task(req.body);
    try {
        await task1.save();
        res.status(201);
        res.json({ task1 });
    } catch (error) {
        res.status(500);
        res.json({msg: error});
    }
}
const updateTask = (req, res) => {
    res.send('update task');
}
const deleteTask = async (req, res) => {
    try {
        const taskID = req.params.id;
        const task = await Task.findOneAndDelete({_id: taskID});

        if(task) {
            return res.status(200).json({msg: 'Task successfully deleted', task: task});
        } else {
            return res.status(404).json({msg: `no task found with the id: ${taskID}`});
        }
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
}