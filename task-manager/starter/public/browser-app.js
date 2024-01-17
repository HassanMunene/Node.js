const formDOM = document.querySelector('.task-form')
//console.log(formDOM);
const taskInputDOM = document.querySelector('.task-input')
const formAlertDOM = document.querySelector('.form-alert');
const loadingDOM = document.querySelector('.loading-text');
const tasksDOM = document.querySelector('.tasks');

// this methods is invoked immediately the document is loaded it basically loads all the tasks.
// it is also invoked when user adds another task to be completed!
const showTasks = async () => {
    //loadingDOM.style.visibility = 'visible';
    try {
        const response = await axios.get('/api/v1/tasks');
        const tasks = response.data.tasks;
        if (tasks.length < 1) {
            tasksDOM.innerHTML = '<h5 class="empty-list">You do not have any tasks</h5>'
            loadingDOM.style.visibility = 'hidden';
            return;
        }
        const allTasks = tasks.map((task) => {
            const {completed, _id: taskID, name} = task;
            return (`
                <div class="single-task ${completed && 'task-completed'}">
                    <h5>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                        </span>
                        ${name}
                    </h5>
                    <div class="task-links">
                        <a href="task.html?id=${taskID}" class="edit-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                            </svg>
                        </a>
                        <button type="button" class="delete-btn" data-id="${taskID}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                            </svg>
                        </button>
                    </div>
                </div>
            `)
        }).join('')
        tasksDOM.innerHTML = allTasks;
    } catch (error) {
        tasksDOM.innerHTML = '<h5 class="empty-list">There was an error, please try later....</h5>'
    } 
}
showTasks();

formDOM.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = taskInputDOM.value;

    if (name !== '') {
        try {
            await axios.post('/api/v1/tasks', {name})
            showTasks();
            taskInputDOM.value = '';
            formAlertDOM.style.display = 'block';
            formAlertDOM.textContent = 'Success, task added';
            formAlertDOM.classList.add('text-success');
        } catch (error) {
            formAlertDOM.style.display = 'block';
            formAlertDOM.innerHTML = 'error, please try again';
        }
        setTimeout(() => {
            formAlertDOM.style.display = 'none';
            formAlertDOM.classList.remove('text-success');
        }, 3000)
    } else {
        formAlertDOM.style.display = 'block';
        formAlertDOM.innerHTML = 'please enter a task'
        setTimeout(() => {
            formAlertDOM.style.display = 'none';
            formAlertDOM.innerHTML = ''
        }, 2000)
    }
})

// deleting the tasks
tasksDOM.addEventListener('click', async(eventObj) => {
    const targetElement = eventObj.target
    if (targetElement.parentElement.classList.contains('delete-btn')) {
        //loadingDOM.style.visibility = 'visible'
        // extract the task id from the dataset(data-id)
        const id = targetElement.parentElement.dataset.id
        //console.log('trash clicked')
        try {
            await axios.delete(`/api/v1/tasks/${id}`)
            showTasks();
        } catch (error) {
            console.log(error);
        }
    }
    //loadingDOM.style.visibility = 'hidden'
})