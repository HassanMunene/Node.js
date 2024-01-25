const registerUser = (req, res) => {
    res.json({msg: 'Register the user before using the app'});
}

const loginUser = (req, res) => {
    res.json({msg: 'log the user to the application'});
}

module.exports = {
    registerUser,
    loginUser
}