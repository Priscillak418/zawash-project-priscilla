const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const managerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        required: 'Please provide first name',
    },
    lastname: {
        type: String,
        trim: true,
        required: 'Please provide last name',
    },
    username: {
        type: String,
        trim: true,
        required: 'Please provide user name',
        unique: true,
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

managerSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model ('Manager',managerSchema);