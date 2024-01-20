const Product = require('../models/productModel');

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find().select('name price').limit(5);

    res.status(200).json({products: products, nbHits: products.length});
}

const getAllProducts = async (req, res) => {
    const { featured, company, name, sort, field, limit, numericFilter } = req.query;
    const queryObject = {};

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false 
    }
    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }
    //console.log(queryObject);
    let result = Product.find(queryObject);
    if (sort) {
        result = result.sort(sort);
    } else {
        result = result.sort('createdAt');
    }
    if (field) {
        //console.log(field);
        let fieldList = field.split(',').join(' ')
        //console.log(fieldList);
        result = result.select(fieldList);
    }
    if (limit) {
        console.log(limit);
        result = result.limit(limit);
    } else {
        result = result.limit(10);
    }
    if (numericFilter) {
        console.log(numericFilter)
    }
    const products = await result;
    res.status(200).json({products: products, nbHits: products.length});
}

module.exports = {
    getAllProductsStatic,
    getAllProducts,
}