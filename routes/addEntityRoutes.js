var express = require('express')
const bcrypt = require('bcrypt')
var router = express.Router();

var doctorCollection = require('../models/doctorCollection')


router.post('/addDoctor', (req,res)=>{
    bcrypt.hash(req.body.doctorPass, 10 ).then((hash)=>{
        req.body.doctorPass = hash;
        new doctorCollection(req.body).save((err)=>{
            if(err){
                res.send(err)
                
            }
            else {
                res.send('Succesful');
            }
        });
    })

    
})



//EXPORT THE ROUTES
module.exports = router;