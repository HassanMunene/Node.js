const Product = require('../models/productModel');

const getAllProductsStatic = async (req, res) => {
    res.status(200).json({msg: 'static products testing route'});
}

const getAllProducts = async (req, res) => {
    const { featured,company,name,sort } = req.query;
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
        console.log(sort);
        const sortList = sort.split(',').join(' ');
        console.log(sortList);
        result = result.sort(sortList);
    } else {
        result = result.sort('createdAt');
    }
    const products = await result;
    res.status(200).json({products: products, nbHits: products.length});
}

module.exports = {
    getAllProductsStatic,
    getAllProducts,
}