const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String,
        unique: true,
        trim: true,
    },
    password: {
        required: true,
        type: String,
        minLength: 8,
        maxLength: 16, // change to longer max?
    }
});

module.exports = User = mongoose.model('user', userSchema);