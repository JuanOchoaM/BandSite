const mongoose = require('mongoose');

const ShirtSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true,
    },
    description: {
    type: String,
    },
    image: {
    type: String,
    },
    updated_date: {
    type: Date,
    default: Date.now,
    },
})

module.exports = Shirt = mongoose.model('shirts', ShirtSchema);