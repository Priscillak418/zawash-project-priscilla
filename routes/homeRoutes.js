const express = require("express");
const router = express.Router();

//specify what to do when the user hits the '/home'
router.get('/', (req, res) => {
    res.render('home', { title: "Home page" })
})

//Export the router.It makes the code in this file accessible in other places
module.exports =router;