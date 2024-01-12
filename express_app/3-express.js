const express = require ('express');
const { products } = require('./data');

const app = express();

app.get('/', (req, res) => {
    res.json(products);
})

app.listen(5003, () => {
    console.log('server is listening on 5003...')
})
