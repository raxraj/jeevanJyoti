const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const childSchema = new Schema({
    child_id: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: false
    },
    motherName: {
        type: String,
        required: false
    },
    parentContact: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    vaccines: [
        {
            name: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                required: true
            },
            given: {
                type: Boolean,
                required: true,
                default: false
            }
        }
    ],
    nextVaccine: {
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        given: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    doctor_id: {
        type: String,
        required: true
    }
})

const childModel = mongoose.model('children', childSchema)

module.exports = childModel
