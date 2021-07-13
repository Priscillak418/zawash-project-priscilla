const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema ({
    numberplate: {
        type: String,
        trim: true,
    },
    datetimeArrival: {
        type: Date,
        trim: true,
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
        type: String,
        trim: true,
    },
    washpackage: {
        type: String,
        trim: true
    }


})

module.exports = mongoose.model('Vehicle', vehicleSchema);