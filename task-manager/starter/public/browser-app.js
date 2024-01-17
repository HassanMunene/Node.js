const formDOM = document.querySelector('.task-form')
//console.log(formDOM);
const taskInputDOM = document.querySelector('.task-input')
const formAlertDOM = document.querySelector('.form-alert');
const loadingDOM = document.querySelector('.loading-text');
const tasksDOM = document.querySelector('.tasks');

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
                </div>
            `)
        }).join('')
        tasksDOM.innerHTML = allTasks;
    } catch (error) {
        tasksDOM.innerHTML = '<h5 class="empty-list">There was an error, please try later....</h5>'
    } 
}
showTasks();

formDOM.addEventListener('click', async (e) => {
    e.preventDefault();
    const name = taskInputDOM.value;

    try {
        await axios.post('/api/v1/tasks', {name})
        //showTasks();
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
})
