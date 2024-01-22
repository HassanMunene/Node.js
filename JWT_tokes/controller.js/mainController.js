const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const CustomError = require('../error/customError');

const login = async (req, res, next) => {
    try {
        const {username, password} = req.body;
        const user = await User.create({
            username: username,
            password: password
        })
        let {_id:userID} = user;
        userID = userID.toString();
        const token = jwt.sign({userID, username}, process.env.JWT_SECRET_KEY, {expiresIn:'30d'})
        res.status(201).json({msg: 'user created', token: token})
    } catch (error) {
        console.log(error)
        const err = new CustomError('Please provide username and password', 400);
        next(err);
    }
}

const dashboard = (req, res) => {
    const luckyNumber = Math.floor(Math.random() *100);
    res.status(200).json({msg: `Hello, Hassan Munene`, secret: `Here is your lucky number: ${luckyNumber}`});
}

module.exports = {
    login, dashboard
}