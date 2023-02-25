import mongoose from "mongoose";
import validator from "validator";

const product_schema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, 'please provide a name'],
        minLength: 5,
        maxLength: 100
    },
    image: {
        type: String,
        validate: [validator.isURL, "please provide a valid url"]
    },
    location: {
        type: String,
        required: [true, 'provide a location']
    },
    resalePrice: {
        type: Number,
        required: [true, 'provide a resale price']
    },
    originalPrice: {
        type: Number,
        required: [true, 'provide a original price']
    },
    yearOfUse: {
        type: Number,
    },
    sellerName: {
        type: String,
    },
    category: {
        type: String,
        enum: ['dell', 'hp']
    }
}, {
    timestamps: true
});

const product_model = mongoose.model('product', product_schema);

export default product_model;