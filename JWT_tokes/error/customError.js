class CustomError extends Error {
    constructor(errorMessage, statusCode) {
        super(errorMessage)
        this.statusCode = statusCode;
        this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error'
    }
}
module.exports = CustomError;