const User = require('../models/user');
const { StatusCodes } = require('http-status-codes');
const CustomApiError = require('../errors/cutom-api-error')
const jwt = require('jsonwebtoken');


const registerUser = async (req, res, next) => {
    try {
        const user = await User.create({...req.body})
        const token = jwt.sign({userID:user._id, name:user.name}, process.env.JWT_SECRET_KEY, {expiresIn:process.env.JWT_LIFETIME})
        res.status(StatusCodes.CREATED).json({status: "user created successfully", user: {name: user.name}, token: token});   
    } catch (error) {
        console.log(error)
        const err = new CustomApiError(error, StatusCodes.BAD_REQUEST)
        next(err);
    }
}

const loginUser = async (req, res, next) => {
    try {
        const { email, password} = req.body;
        if (!email || !password) {
            throw new CustomApiError("Please provide email and password", StatusCodes.BAD_REQUEST)
        }
        const user = await User.findOne({email})
        if(!user) {
            throw new CustomApiError("Invalid user credentials", StatusCodes.UNAUTHORIZED)
        }
        
        // when user is found we then compare the validate password using bcrypt then generate jwt token
        const isPasswordCorrect = await user.validatePassword(password);
        if (!isPasswordCorrect) {
            throw new CustomApiError("Invalid user credentials", StatusCodes.UNAUTHORIZED)
        }

        // If user is available and password is correct then generate token
        const token = jwt.sign({userID:user._id, name:user.name}, process.env.JWT_SECRET_KEY, {expiresIn:process.env.JWT_LIFETIME})
        res.status(StatusCodes.OK).json({msg: 'successfully logged in', user: {name:user.name}, token});
    } catch (error) {
        next(error)
    }
}

module.exports = {
    registerUser,
    loginUser
}