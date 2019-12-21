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

// Useful Functions

function makeChildParams(initData) {
    initData.dob = new Date(initData.dob)
    
    let data = initData;

    data.vaccines = [
        {
            name: 'BCG, OPV-0 & Hepatitis B',
            date: new Date(data.dob),
            given: initData.firstDosage
        }, {
            name: 'OPV-1 & Penta-1',
            date: new Date(data.dob)
        }, {
            name: 'OPV-2 & Penta-2',
            date: new Date(data.dob)
        }, {
            name: 'OPV-3, Penta-3 & IPV',
            date: new Date(data.dob)
        }, {
            name: 'MMR-1',
            date: new Date(data.dob)
        }, {
            name: 'OPV Booster, DPT 1st Booster',
            date: new Date(data.dob)
        }, {
            name: 'DPT 2nd Booster',
            date: new Date(data.dob)
        }, {
            name: 'TT-1',
            date: new Date(data.dob)
        }, {
            name: 'TT-2',
            date: new Date(data.dob)
        },
    ]

    var daysToAdd = [
        0,
        42,
        70,
        98,
        252,
        448,
        1825,
        3650,
        5475
    ]

    daysToAdd.forEach((item, index) => {
        data.vaccines[index].date.setDate(data.vaccines[index].date.getDate() + item)
    })

    data.nextVaccine = nextVaccine(data.vaccines);

    return data;
}

function nextVaccine(vaccines){
    for(i=0; i<vaccines.length; i++){
        if(!vaccines[i].given){
            return vaccines[i]
            //return this Vaccine
        }
        else{
            continue
        }
    }
    return null
}


// EXPORT THE ROUTES
module.exports = router;
