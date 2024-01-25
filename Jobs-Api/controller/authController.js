const User = require('../models/user');
const { StatusCodes } = require('http-status-codes');
const CustomApiError = require('../errors/cutom-api-error')
const bcrypt = require('bcryptjs');


const registerUser = async (req, res, next) => {
    try {
        const {name, email, password} = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const tempUser = {
            name: name,
            email: email,
            password: hashedPassword
        }
        const user = await User.create({...tempUser})
        res.status(StatusCodes.CREATED).json(user);   
    } catch (error) {
        console.log(error)
        const err = new CustomApiError('Bad request', StatusCodes.BAD_REQUEST)
        next(err);
    }
}

const loginUser = (req, res) => {
    res.json({msg: 'log the user to the application'});
}

module.exports = {
    registerUser,
    loginUser
}