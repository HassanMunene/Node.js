const errorHandlerMiddleware = (err, req, res, next) => {
    return res.status(err.statusCode).json({status: err.status, msg: err.message})
}

module.exports = errorHandlerMiddleware;