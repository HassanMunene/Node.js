class CustomApiError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode;
        this.message = message;
        this.status = statusCode >=400 && statusCode < 500 ? 'fail': 'Server error'
    }
}
module.exports = CustomApiError;