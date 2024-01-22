const CustomError = require('../error/customError');
const jwt = require('jsonwebtoken');

const authenticationMiddleware = (req, res, next) => {
    //console.log(req.headers.authorization);
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new CustomError('No token provided', 401);
    }
    const token = authHeader.split(' ')[1];
    //console.log(token)
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(decoded);
        const {userID,username} = decoded;
        req.user = {userID, username};
        //console.log(req.user);
    } catch (error) {
        throw new CustomError('you provided wrong token mate', 401);
    }
    next();
}

module.exports = authenticationMiddleware;