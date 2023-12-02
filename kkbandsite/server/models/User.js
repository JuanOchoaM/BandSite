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
        type: String
    }
});

module.exports = User = mongoose.model('user', userSchema);