const express = require("express");
const mongoose = require('mongoose');
const Washer = require('../models/washerSchema');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('register_washer', { title: " Car washer form" })
})
router.post("/", (req, res) => {
    console.log(req.body)
    const washer = new Washer(req.body);
    washer.save()
        .then(() => { res.send('Thank you for registering!'); })
        .catch((err) => {
            console.log(err);
            res.send('Sorry! Something went wrong.');
        });
})

module.exports = router;