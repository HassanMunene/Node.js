const express = require('express');
const { products } = require('./data');

const app = express();

app.get('/', (request, response) => {
    response.send(
        '<h3>Home Page</h3><br/><a href="/api/products">Products</a>'
    );
})

app.get('/api/products/:productID', (request, response) => {
    console.log(request.params);
    const productID = parseInt(request.params.productID);

    singleProduct = products.find((product) => {
        return product.id === productID;
    })
    if (!singleProduct) {
        response.status(404);
        response.send("<h1>This product cannot be found</h1>")
    }
    response.send(singleProduct);
})

app.get('*', (request, response) => {
    response.send(`Ooops canno get the page you are request: ${request.url}`);
})

app.listen(5003, () => {
    console.log('Hello friend im listening on port 5003...');
})
