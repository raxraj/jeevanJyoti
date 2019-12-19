const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    doctor_id : {
        type : String,
        required : true
    },
    doctorPass : {
        type : String,
        required : true
    },
    doctorName : {
        type : String,
        required : true
    },
    doctorContact :{
        type : String,
        required : true
    },
    doctorClinic : {
        type : String,
        required : true
    },

})

const doctorModel = mongoose.model('doctors' , doctorSchema)

module.exports = doctorModel;

