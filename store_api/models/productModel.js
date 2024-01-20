const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'you must provide the name of the product']
    },
    price: {
        type: Number,
        required: [true, 'You must provide the price of the product']
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported', 
        }
        //enum: ['ikea', 'liddy', 'caressa', 'marcos']
    }
})

const Product = model('Product', productSchema);

module.exports = Product;