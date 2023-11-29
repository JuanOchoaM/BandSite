const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    Name: {
    type: String,
    required: true,
    },
    Body: {
    type: String,
    },
    Image: {
    type: String,
    },
    Price: {
    type: Number,
    },
    updated_date: {
    type: Date,
    default: Date.now,
    },
})

module.exports = Item = mongoose.model('items', ItemSchema);