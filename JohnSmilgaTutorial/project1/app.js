const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('You are in the Home page');
    }
    else if (req.url === '/about') {
        res.end('You are in the about page');
    }
    else {
        res.end(`
        <h1>Ooops</h1>
        <p>This page Ain't available</p>
        <a href="/">Go back to home page</a>
        `);
    }
})

server.listen(5003, () => console.log('Listening'));