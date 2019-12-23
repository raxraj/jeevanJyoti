var express = require('express')
var fs = require('fs')
var https = require('https')
var dotenv = require('dotenv')
const mongoose = require('mongoose')
const body_parser = require('body-parser')


//MODELS


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

// FILES REQUIRED
const loginRoutes = require('./routes/loginRoutes')
const addEntityRoutes = require('./routes/addEntityRoutes')
const functionalityRoutes = require('./routes/functionalityRoutes')
const userRoutes = require('./routes/userRoutes')


// REQUIRED VARIABLES
let port = process.env.PORT || 3000


// APP ROUTES
app.use('/user/', loginRoutes);
app.use('/user/', addEntityRoutes);
app.use('/user/', userRoutes);
app.use('/function/', functionalityRoutes);



app.get('/', function (req, res) {
    res.redirect('/user/dashboard')
})

app.listen(port,()=>{
    console.log("Server Listening on "+port);
    
})