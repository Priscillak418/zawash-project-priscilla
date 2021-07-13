//Dependencies
const express = require("express")
const path = require('path')
const homeRoutes =require('./routes/homeRoutes')
const registermanagerRoutes = require('./routes/registermanagerRoutes')
const washerRoutes = require('./routes/washerRoutes')
const loginRoutes = require('./routes/loginRoutes')
const vehicleRoutes = require('./routes/vehicleRoutes')
const mongoose = require('mongoose');
require('dotenv').config();
require('./models/managerSchema');
require('./models/vehicleSchema');
require('./models/washerSchema');



//instantiations
const app = express()

//connecct to database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open');
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });


//Configurations
app.set('view engine', 'pug');
app.set('views', './views');

// middle ware
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')));

//Routes
//homeRoutes
app.use('/',homeRoutes);

//registermanagerRoutes
app.use('/manager', registermanagerRoutes);

//washerRoutes
app.use('/register', washerRoutes);

//loginRoutes
app.use('/login', loginRoutes);

//vehicleRoutes
app.use('/vehicle', vehicleRoutes);

//register_washer 
// app.get('/register', (req, res) => {
//     res.render('register_washer', { title: " Car washer form" })
// })
//navbar
app.get('/navbar', (req, res) => {
    res.render('navbar', { title: "Navigation bar" })
})
// homepage
// app.get('/', (req, res) => {
//     res.render('home', { title: "Home page" })
// })
// //vehicle
// app.get('/vehicle', (req, res) => {
//     res.render('add_vehicle', { title: "Add vehicle" })
// })
// app.post("/vehicle", (req, res) => {
//     console.log(req.body)
//     res.send("The car has been registered")
// })

//add manager
// app.get('/manager', (req, res) => {
//     res.render('register_manager', { title: "Registration manager" })
// })
//login
// app.get('/login', (req, res) => {
//     res.render('login', { title: "Login page" })
// })

//washer
// app.post("/register", (req, res) => {
//     console.log(req.body)
//     res.send("The data has been submitted")
// })
//manager
// app.post("/manager", (req, res) => {
//     console.log(req.body)
//     res.send("The data has been submitted")
// })
//login
app.post("/login", (req, res) => {
    console.log(req.body)
    res.send("The data has been submitted")
})


// handle non existing routes
app.get('*', (req, res) => {
    res.status(404).send('This is an invalid URL')
})




// server
app.listen(4500, () => console.log("Listening on Port 4500!!!"));