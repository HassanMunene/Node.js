const formContainer = document.querySelector('.contact-form');
const userInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const alertContainer = document.querySelector('.form-alert');
const tokenAlert = document.querySelector('.token');
const resultsArea = document.querySelector('.results');

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
       console.log(error); 
    }
    setTimeout(() => {
        alertContainer.textContent = '';
        alertContainer.classList.remove('text-success');
    }, 3000)
})