const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema ({
    numberplate: {
        type: String,
        trim: true,
    },
    dateofarrival: {
        type: Date,

    },

    datetimeArrival: {
        type: Date,
        
    },
    color: {
        type: String,
        trim: true,
    },
    make: {
        type: String,
        trim: true,
    },
    washer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'washer',
    },
    washpackage: {
        type: String,
        trim: true
    },
    packagePrice:{
        type: Number,
    },
    washerFee:{
        type: Number,
    }, 


})

module.exports = mongoose.model('Vehicle', vehicleSchema);