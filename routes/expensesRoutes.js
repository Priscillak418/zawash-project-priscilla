const express = require("express");
const mongoose = require('mongoose');
const Expense = require('../models/expenseSchema')


const router = express.Router();

router.get('/', (req, res) => {
    res.render('expenses', { title: " Add expenses ", alert: req.query.alert })
})
router.post("/", async (req, res) => {
    try {
        const expense = new Expense(req.body);
        await expense.save()
        // res.redirect('expense')
        res.redirect('expenses?alert=success')
    }
    catch (err) {
        res.status(400).render('expenses', { title: "Add Expenses", alert: 'error' })
        console.log(err)
    }
})

module.exports = router;