const errorHandlerMiddleware = (err, req, res, next) => {
    res.status(500);
    res.json({msg: err});
}

module.exports = errorHandlerMiddleware;