const formContainer = document.querySelector('.contact-form');
const userInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const alertContainer = document.querySelector('.form-alert');
const tokenAlert = document.querySelector('.token');
const resultsArea = document.querySelector('.results');

const getDataBtn = document.querySelector('#data');
//console.log(typeof(formContainer));

formContainer.addEventListener('submit', async(e) => {
    e.preventDefault();
    const username = userInput.value;
    const password = passwordInput.value;
    //console.log(username, password);
    //console.log(userInput.value, passwordInput.value)

    try {
        const response = await axios.post('/api/v1/login', {username: username, password: password})
        //console.log(response.data);
        const {msg, token} = response.data;
        //console.log(msg, token);
        userInput.value = '';
        passwordInput.value = '';
        if (msg === 'user created') {
            //console.log(alertContainer);
            alertContainer.textContent = msg;
            alertContainer.classList.add('text-success');
        }
        localStorage.setItem('token', token);
        tokenAlert.textContent = 'token now present in local storage'
        tokenAlert.classList.add('text-success');
        resultsArea.innerHTML = '';

    } catch (error) {
        alertContainer.textContent = 'Sorry user not created something is off';
        alertContainer.classList.add('text-alert');
        localStorage.removeItem('token')
        tokenAlert.textContent = 'token not present'
        tokenAlert.classList.remove('text-success');
        resultsArea.innerHTML = '';
        console.log(error); 
    }
    setTimeout(() => {
        alertContainer.textContent = '';
        alertContainer.classList.remove('text-success');
    }, 2000)
})

getDataBtn.addEventListener('click', async () => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.get('/api/v1/dashboard', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        console.log(response);
        const {msg, secret} = response.data;
        resultsArea.innerHTML = `<h4>${msg}</h4><br><p>${secret}</p>`
    } catch (error) {
        localStorage.removeItem('token');
        resultsArea.innerHTML = `<p>Error</p>`
    }
})

const checkTokenInLocalStorage = () => {
    tokenAlert.classList.remove('text-success');
    const token = localStorage.getItem('token');

    if (token) {
        tokenAlert.textContent = 'token present';
        tokenAlert.classList.add('text-success');
    }
}
checkTokenInLocalStorage();