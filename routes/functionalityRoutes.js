var express = require('express')
var router = express.Router();

//Send Me Models Here
var doctorCollection = require('../models/doctorCollection')
var childCollection = require('../models/childCollection')


router.post('/sendMessage',(req,res)=>{
    var docId = req.body.doctor_id;
    req.body.queryDate = new Date(req.body.queryDate)
    console.log(req.body.queryDate);
    doctorCollection.findOne({doctor_id : docId}).then((foundDoctor)=>{
        if(foundDoctor){
            //SEND MESSAGES BASED ON DATES
            childCollection.find({doctor_id : docId}, function(err,docs){
                docs.forEach((item,index)=>{
                    if(item.date = req.body.queryDate){
                        console.log(item);
                    }
                })
            })
        }
        else{
            //RETURN ERROR 
            res.send({
                done : false,
                message : 'Doctor not registered.'
            })
        }
    })
})


//EXPORT THE ROUTES
module.exports = router;