const express = require("express");
const mongoose = require('mongoose');
const Manager = require('../models/managerSchema')

const router = express.Router();

router.get('/', (req, res) => {
    res.render('register_manager', { title: "Registration manager" })
})

router.post("/", (req, res) => {
    console.log(req.body)
    const manager = new Manager(req.body);
    manager.save()
        .then(() => { res.send('Registration successfull!'); })
        .catch((err) => {
            console.log(err);
            res.send('Sorry! Something went wrong.');
        });
})


module.exports = router;