const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    itemtype: {
        type: String,
        trim: true,
    },
    amount: {
        type: Number,
    },
    dateofentry: {
        type: Date
    },
});

module.exports = mongoose.model('Expense', expenseSchema);