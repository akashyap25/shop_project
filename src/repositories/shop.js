const mongoose = require('mongoose');

// Define the shop schema
const shopSchema = new mongoose.Schema({
    shopName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    onlineDelivery: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 0
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    owners: {
        name: {
            type: String,
            required: true
        },
        mobileNo: {
            type: String,
            required: true
        }
    },

});

// Create the shop model
const Shop = mongoose.model('Shop', shopSchema);

// Export the shop model
module.exports = Shop;
