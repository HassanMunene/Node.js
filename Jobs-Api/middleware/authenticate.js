const jwt = require('jsonwebtoken');
const CustomApiError = require('../errors/cutom-api-error');
const { StatusCodes } = require('http-status-codes');

const authenticateUserMiddleware = (req, res, next) => {
    try {
        // first check the header propertie from the request object
        const authHeader = req.headers.authorization;
        //console.log(authHeader);
        if (!authHeader || !authHeader.startsWith('Bearer')) {
            throw new CustomApiError('Authentication Invalid', StatusCodes.UNAUTHORIZED);
        }
        const token = authHeader.split(' ')[1];
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        // attach a user to the next routes to be used.
        req.user = {useID: payload.userID, name: payload.name}
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = authenticateUserMiddleware;