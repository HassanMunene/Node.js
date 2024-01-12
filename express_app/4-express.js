const express = require('express');
const { products } = require('./data');

const app = express();

app.get('/', (request, response) => {
    response.send(
        '<h3>Home Page</h3><br/><a href="/api/products">Products</a>'
    );
})

app.get('/api/products', (request, response) => {
    const newProducts = products.map((singleProduct) => {
        const {id, name, image} = singleProduct;
        //console.log(`id:${id} name:${name}, image:${image}`)
        return {id, name, image};
    })
    console.log(newProducts);
    response.send(newProducts);
})

app.get('*', (request, response) => {
    response.send(`Ooops canno get the page you are request: ${request.url}`);
})

app.listen(5003, () => {
    console.log('Hello friend im listening on port 5003...');
})
