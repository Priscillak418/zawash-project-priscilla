const express = require("express");
const mongoose = require('mongoose');
const managerSchema = require("../models/managerSchema");
const Manager = require('../models/managerSchema')

const router = express.Router();

router.get('/', (req, res) => {
    res.render('register_manager', { title: "Registration manager", alert: req.query.alert})
})


router.post('/', async (req, res) =>{
    const manager = new managerSchema (req.body);
    await managerSchema.register(manager,req.body.password,  (err) => {
        if(err) {
            res.status(400).render('register_manager', {title:'Registration manager', alert:'error'})
            console.log(err)
        }else {
            res.redirect('manager?alert=success')
        }
    })
})


module.exports = router;