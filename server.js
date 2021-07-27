//Dependencies
const express = require("express")
const path = require('path')
const homeRoutes =require('./routes/homeRoutes')
const registermanagerRoutes = require('./routes/registermanagerRoutes')
const washerRoutes = require('./routes/washerRoutes')
const loginRoutes = require('./routes/loginRoutes')
const vehicleRoutes = require('./routes/vehicleRoutes')
const reportRoutes = require('./routes/reportRoutes');
const expensesRoutes = require('./routes/expensesRoutes');
const mongoose = require('mongoose');
const moment = require('moment');
const passport = require('passport');
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
});
require('dotenv').config();
const managerSchema = require('./models/managerSchema');
require('./models/vehicleSchema');
require('./models/washerSchema');
require('./models/expenseSchema');



//instantiations
const app = express()

//connecct to database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open');
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });


//Configurations
app.locals.moment = moment
app.set('view engine', 'pug');
app.set('views', './views');


// middle ware
app.use(express.urlencoded({ extended: true }))
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

passport.use(managerSchema.createStrategy());
passport.serializeUser(managerSchema.serializeUser());
passport.deserializeUser(managerSchema.deserializeUser());

app.use(express.static(path.join(__dirname, 'public')));

//When someone logins in for the first time they are automatically redirected to the login page
 var loginChecker = function(req, res, next) {
     if (req.path != '/login' && !req.session.user) {
        res.redirect('/login')
     }
     next()
    }
 app.use(loginChecker)

 

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

//report routes
app.use('/report', reportRoutes);

//expenses routes
app.use('/expenses', expensesRoutes);


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
// app.get('/', (req, res) => {
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