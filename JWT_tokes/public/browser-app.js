const formContainer = document.querySelector('.contact-form');
const userInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
//console.log(typeof(formContainer));

formContainer.addEventListener('submit', async(e) => {
    e.preventDefault();
    const username = userInput.value;
    const password = passwordInput.value;
    console.log(username, password);
    console.log(userInput.value, passwordInput.value)

    try {
        const response = await axios.post('/api/v1/login', {username: "Laddona", password: "12453"})
        //console.log(response);
        userInput.value = '';
        passwordInput.value = '';
    } catch (error) {
       console.log(error); 
    }
})