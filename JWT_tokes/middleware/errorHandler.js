const errorHandlerMid = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'Ooops something is wrong'
    res.status(error.statusCode).json({
        status: error.status,
        msg: error.message
    })
}

module.exports = errorHandlerMid;