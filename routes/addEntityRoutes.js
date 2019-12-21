var express = require('express')
const bcrypt = require('bcrypt')
var router = express.Router();

var doctorCollection = require('../models/doctorCollection')
var childCollection = require('../models/childCollection')


router.post('/addDoctor', (req, res) => {
    bcrypt.hash(req.body.doctorPass, 10).then((hash) => {
        req.body.doctorPass = hash;
        new doctorCollection(req.body).save((err) => {
            if (err) {
                res.send(err)

            } else {
                res.send('Succesful');
            }
        });
    })
})

router.post('/addChild', (req, res) => {
    
    new childCollection(makeChildParams(req.body)).save((err) => {
        if (err) {
            res.send(err)
        } else {
            res.send('Data Added')
        }
    })
})

//Useful Functions

function makeChildParams(initData){
    initData.dob = Date.parse(initData.dob)
    let data = initData;
    
    data.vaccine_1 = {
        name: 'BCG',
        date: new Date(data.dob),
        given : initData.bcg
    }
    data.vaccine_2 = {
        name: 'OPV-0',
        date: new Date(data.dob),
        given : initData.opv0
    }
    data.vaccine_3 = {
        name: 'PENTA-1',
        date: new Date(data.dob),
    }
    data.vaccine_4 = {
        name: 'OPV-2',
        date: new Date(data.dob),
    }
    data.vaccine_5 = {
        name: 'PENTA-2',
        date: new Date(data.dob),
    }
    data.vaccine_6 = {
        name: 'OPV-3',
        date: new Date(data.dob),
    }
    data.vaccine_7 = {
        name: 'PENTA-3',
        date: new Date(data.dob),
    }
    data.vaccine_8 = {
        name: 'IPV',
        date: new Date(data.dob),
    }
    data.vaccine_9 = {
        name: 'MMR-1',
        date: new Date(data.dob),
    }
    data.vaccine_10 = {
        name: 'OPV BOOSTER',
        date: new Date(data.dob),
    }
    data.vaccine_11 = {
        name: 'DPT 1st BOOSTER',
        date: new Date(data.dob),
    }
    data.vaccine_12 = {
        name: 'DPT 2nd BOOSTER',
        date: new Date(data.dob),
    }
    data.vaccine_13 = {
        name: 'TT-1',
        date: new Date(data.dob),
    }
    
    

    data.vaccine_1.date.setDate(data.vaccine_1.date.getDate())
    data.vaccine_2.date.setDate(data.vaccine_1.date.getDate())
    data.vaccine_3.date.setDate(data.vaccine_1.date.getDate()+42)
    data.vaccine_4.date.setDate(data.vaccine_1.date.getDate()+42)
    data.vaccine_5.date.setDate(data.vaccine_1.date.getDate()+70)
    data.vaccine_6.date.setDate(data.vaccine_1.date.getDate()+70)
    data.vaccine_7.date.setDate(data.vaccine_1.date.getDate()+(14*7))
    data.vaccine_8.date.setDate(data.vaccine_1.date.getDate()+(14*7))
    data.vaccine_9.date.setDate(data.vaccine_1.date.getDate()+(14*7))
    data.vaccine_10.date.setDate(data.vaccine_1.date.getDate()+(9*4*7))
    data.vaccine_11.date.setDate(data.vaccine_1.date.getDate()+16*4*7)
    data.vaccine_12.date.setDate(data.vaccine_1.date.getDate()+5*365)
    data.vaccine_13.date.setDate(data.vaccine_1.date.getDate()+10*365)
    return data;
}


// EXPORT THE ROUTES
module.exports = router;
