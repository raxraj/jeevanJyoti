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

// FILES REQUIRED
const loginRoutes = require('./routes/loginRoutes')
const addEntityRoutes = require('./routes/addEntityRoutes')


// REQUIRED VARIABLES
let port = process.env.PORT || 3000


//APP MIDDLEWARE
    //BODY PARSER
app.use(body_parser.urlencoded({extended: false}))
app.use(body_parser.json())



// APP ROUTES
app.use('/user/', loginRoutes);
app.use('/user/', addEntityRoutes);



app.get('/', function (req, res) {
    res.send('hello world')
})

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app).listen(port, function () {
    console.log('Listening on Port 3000')
})
