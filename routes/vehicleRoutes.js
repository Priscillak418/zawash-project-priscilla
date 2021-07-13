const express = require("express");
const mongoose = require('mongoose');
const Vehicle = require('../models/vehicleSchema');

const router = express.Router();
router.get('/', (req, res) => {
    res.render('add_vehicle', { title: "Add vehicle" })
})

router.post("/", (req, res) => {
    console.log(req.body)
    const vehicle = new Vehicle(req.body);
    vehicle.save()
        .then(() => { res.send('Registration successfull!'); })
        .catch((err) => {
            console.log(err);
            res.send('Sorry! Something went wrong.');
        });
})



module.exports = router;