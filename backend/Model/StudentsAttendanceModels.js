const mongoose = require('mongoose')

const StudentAttendanceModel = new mongoose.Schema({
    Student : {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    checked: {
        type: String,
        required: true
    }
})

const studentattendance = mongoose.model('studentattendance', StudentAttendanceModel)
module.exports = studentattendance