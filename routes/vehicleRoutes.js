const express = require("express");
const mongoose = require('mongoose');
const Vehicle = require('../models/vehicleSchema');
const Washer = require('../models/washerSchema');

const router = express.Router();

washpackage = {
    smallcars: { washerFee: 3000, packagePrice: 10000 },
    medium: { washerFee: 4000, packagePrice: 15000 },
    fullwash: { washerFee: 5000, packagePrice: 20000 },
    bodaboda: { washerFee: 1500, packagePrice: 5000 },
    engine: { washerFee: 2000, packagePrice: 10000 }
}

router.get('/', async (req, res) => {
    let washerlist = await Washer.find();
    res.render('add_vehicle', { washers: washerlist, 
        title: "Add vehicle", alert: req.query.alert })
})

router.post("/", async (req, res) => {
    try {
        //combine the date and time
        let data = req.body
        let datetimeArrival = Date.parse(data.dateofarrival + 'T' + data.timeofarrival)
        data.datetimeArrival = datetimeArrival
        
        //derive the package price and the washer fee
        // console.log('the package selected from the form')
        // console.log(data.washpackage)
        let packageDetails = washpackage[data.washpackage]

        // console.log('the package from the in memory db')
        // console.log(washpackage)

        data.packagePrice = packageDetails['packagePrice']
        data.washerFee = packageDetails['washerFee']

        
        const vehicle = new Vehicle(data);
        await vehicle.save()
        // res.redirect('washer')
        res.redirect('vehicle?alert=success')
    }
    catch (err) {
        res.status(400).render('add_vehicle', { title: "Add vehicle", alert: 'error' })
        console.log(err)
    }
})


module.exports = router;