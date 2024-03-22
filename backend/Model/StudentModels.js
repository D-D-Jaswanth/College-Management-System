const mongoose = require('mongoose')

const StudentModel = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    mobilenumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    coursename: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    fathername: {
        type: String,
        required: true
    },
    fatheroccupation: {
        type: String,
        required: true
    },
    mothername: {
        type: String,
        required: true
    },
    motheroccupation: {
        type: String,
        required: true
    }
})

const studentadmission = mongoose.model('studentadmission', StudentModel)
module.exports = studentadmission