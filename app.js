var express = require('express')
var dotenv = require('dotenv')
const mongoose = require('mongoose')
var body_parser = require('body-parser')
const passport = require("passport")
const flash = require("express-flash")
const session = require("express-session")


//INITIALIZE PASSPORT


//MODELS
var doctorCollection = require('./models/doctorCollection')



dotenv.config()

// CREATE THE APP
var app = express()




// CONNECT TO MONGO DB
try {
    mongoose.connect(process.env.MONGO_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {  
        console.log("Connected to Mongo DB");
    })
} catch (error) {
    console.error(error);
}




//APP MIDDLEWARE
    //BODY PARSER
app.use(body_parser.urlencoded({extended: false}))
app.use(body_parser.json())

    //VIEW ENGINE
app.set('view engine', 'ejs')
    //PUBLIC FOLDER
app.use(express.static(__dirname+'/public'))
app.use(session({
    secret : 'SOME$ecre!',
    resave : false,
    saveUninitialized : false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())


// FILES REQUIRED
const addEntityRoutes = require('./routes/addEntityRoutes')
const functionalityRoutes = require('./routes/functionalityRoutes')
const userRoutes = require('./routes/userRoutes')

const initializePassport = require("./passportConfig")


initializePassport(passport , 
    username=>doctorCollection.findOne({doctor_id : username}).then(foundDoc=>foundDoc),
    id => doctorCollection.findById(id).then(user=>user)
)

const authCheckers = require('./authFunctions')
const checkUnAuthenticated = authCheckers.checkUnAuthenticated;




// REQUIRED VARIABLES
let port = process.env.PORT || 3000


// APP ROUTES
app.use('/user/', addEntityRoutes);
app.use('/user/', userRoutes);
app.use('/function/', functionalityRoutes);



app.post("/user/login", passport.authenticate('local', {
    successRedirect : '/user/dashboard',
    failureRedirect : '/',
    failureFlash:true
}))

app.get('/user/logout',(req,res)=>{
    req.logout();
    res.redirect('/');
})

// app.post('/user/login',(req,res)=>{
//     console.log(req.body);
//     res.send("DONE")
// })


app.get('/', checkUnAuthenticated, function (req, res) {
    res.render('login.ejs')
})

app.listen(port,()=>{
    console.log("Server Listening on "+port);
    
})