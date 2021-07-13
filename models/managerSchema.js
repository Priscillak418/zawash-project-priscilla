const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
    },
    lastname: {
        type: String,
        trim: true,
    },
    username: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        trim: true,
    },
    dateofbirth: {
        type: Date,
        trim: true,
    },
    phonenumber: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model ('Manager',managerSchema);