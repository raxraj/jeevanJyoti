var express = require('express')
var router = express.Router();

// Send Me Models Here
var doctorCollection = require('../models/doctorCollection')
var childCollection = require('../models/childCollection')
const messageSender = require('../messageSender')


router.post('/sendMessage', (req, res) => {
    var docId = req.body.doctor_id;
    req.body.queryDate = new Date(req.body.queryDate)
    console.log(req.body.queryDate);
    doctorCollection.findOne({doctor_id: docId}).then((foundDoctor) => {
        if (foundDoctor) { // SEND MESSAGES BASED ON DATES
            childCollection.find({
                doctor_id: docId
            }, function (err, docs) {
                docs.forEach((item, index) => {

                    if (compareDates(item.nextVaccine.date, req.body.queryDate)) {
                        var message = "Mr. "+item.fatherName+", You have a Vaccination Appointment with Dr. "+foundDoctor.doctorName+" of your child at "+foundDoctor.doctorClinic+" on "+dateString(item.nextVaccine.date)+". Your child ID is "+item.child_id;
                        messageSender(message,item.parentContact)
                    }
                })
            })
            res.send({done : true,message: 'Messages has been send'})
        } else { // RETURN ERROR
            res.send({done: false, message: 'Doctor not registered.'})
        }
    })
})


// Functions
function compareDates(date1, date2) {
    if ((date1.getDate() === date2.getDate()) && (date1.getMonth() === date2.getMonth()) && (date1.getFullYear() === date2.getFullYear())) {
        return true
    } else {
        return false
    }
}

function dateString(date){
    var day  , month ;
    switch(date.getDay()){
        case 0 : day = 'Sunday'; break;
        case 1 : day = 'Monday'; break;
        case 2 : day = 'Tuesday'; break;
        case 3 : day = 'Wednesday'; break;
        case 4 : day = 'Thursday'; break;
        case 5 : day = 'Friday'; break;
        case 6 : day = 'Saturday'; break;
    }
    switch(date.getMonth()){
        case 0 : month = 'Jan'; break;
        case 1 : month = 'Feb'; break;
        case 2 : month = 'Mar'; break;
        case 3 : month = 'Apr'; break;
        case 4 : month = 'May'; break;
        case 5 : month = 'Jun'; break;
        case 6 : month = 'Jul'; break;
        case 7 : month = 'Aug'; break;
        case 8 : month = 'Sept'; break;
        case 9 : month = 'Oct'; break;
        case 10 : month = 'Nov'; break;
        case 11 : month = 'Dec'; break;
    }

    return day+" "+date.getDate()+" "+month+", "+date.getFullYear()
}

// EXPORT THE ROUTES
module.exports = router;
