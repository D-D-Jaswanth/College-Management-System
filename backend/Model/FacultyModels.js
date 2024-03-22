const mongoose = require('mongoose')

const FacultyModel = new mongoose.Schema({
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
    husbandname: {
        type: String,
        required: true
    },
    husbandoccupation: {
        type: String,
        required: true
    },
    educational: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    previouscollege: {
        type: String,
        required: true
    }
})

const faculty = mongoose.model('faculty', FacultyModel)
module.exports = faculty