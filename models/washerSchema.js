const mongoose = require('mongoose');

const washerSchema = new mongoose.Schema ({
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
        
    },
    nin: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },
    employeetype:{
        type: String,
        trim: true,
    }
})
module.exports = mongoose.model('Washer', washerSchema);