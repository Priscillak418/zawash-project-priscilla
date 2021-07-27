const express = require("express");
const passport = require('passport')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login', { title: "Login page", alert: req.query.alert })
})
// router.post("/", (req, res) => {
//     console.log(req.body)
//     res.send("The data has been submitted")
// })
// checks username and password using passport
router.post('/', passport.authenticate('local',
    { failureRedirect: '/login?alert=error' }),
    (req, res) => {
        req.session.user = req.user
        res.redirect('/');
    })

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login')
    })
})


module.exports = router;