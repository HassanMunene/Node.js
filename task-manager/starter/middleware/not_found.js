const notFound = (request, response) => {
    response.status(404);
    response.send('The resource cannot be found')
}

module.exports = notFound;