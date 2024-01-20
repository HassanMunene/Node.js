require('dotenv').config()
const connectDB = require('./db/connect_db');
const Product = require('./models/productModel');
const jsonProducts = require('./products.json');


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI2);
        await Product.deleteMany();
        await Product.create(jsonProducts);
        // const prod = await Product.find();
        // console.log(prod);
        console.log('Success');
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start();