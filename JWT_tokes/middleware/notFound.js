const notFoundHandler = (req, res, next) => {
    res.status(404);
    res.json({mgs: `The resource: ${req.originalUrl} was not found`});
    next();
}

module.exports = notFoundHandler;