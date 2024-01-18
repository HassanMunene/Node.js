//const { param } = require("../routes/tasks");
const editFormDOM = document.querySelector('.single-task-form');
const taskIdContainer = document.querySelector('.task-edit-id');
const taskNameContainer = document.querySelector('.task-edit-name');
const taskCompletedContainer = document.querySelector('.task-edit-completed');
const editBtnContainer = document.querySelector('.task-edit-btn');
const formAlertDOM = document.querySelector('.form-alert');
let tempName;

const queryString = window.location.search;
const URLparams = new URLSearchParams(queryString);
//console.log(URLparams);
const id = URLparams.get('id');

if (!id) {
    console.log('No id found');
}

const showTask = async () => {
    try {
        //console.log(id);
        const response = await axios.get(`/api/v1/tasks/${id}`);
        const task = response.data.task;
        const { _id: taskID, completed, name } = task;
        taskIdContainer.textContent = taskID;
        taskNameContainer.value = name;
        
        if (completed) {
            taskCompletedContainer.checked = true;
        }
    } catch (error) {
        console.log(error);
    }
}
showTask();

editFormDOM.addEventListener('submit', async (eventObj) => {
    editBtnContainer.textContent = 'Loading...'
    eventObj.preventDefault();

    try {
        const taskName = taskNameContainer.value;
        const taskCompleted = taskCompletedContainer.checked;
        const response = await axios.patch(`/api/v1/tasks/${id}`, {
            name: taskName,
            completed: taskCompleted,
        });
        const task = response.data.task;
        const { _id: taskID, completed, name } = task;

        taskIdContainer.textContent = taskID;
        taskNameContainer.value = name;
        tempName = name;

        if (completed) {
            taskCompletedContainer.checked = true;
        }
        formAlertDOM.style.display = 'block';
        formAlertDOM.textContent = 'success, edited task';
        formAlertDOM.classList.add('text-success');
    } catch (error) {
        console.log(error);
        taskNameContainer.value = tempName;
        formAlertDOM.style.display = 'block';
        formAlertDOM.innerHTML = 'error, please try again';
    }
    editBtnContainer.textContent = 'Edit';
    setTimeout(() => {
        formAlertDOM.style.display = 'none';
        formAlertDOM.classList.remove('text-success');
    }, 3000)
})