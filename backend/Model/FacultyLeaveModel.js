const mongoose = require('mongoose')

const FacultyLeaveModel = new mongoose.Schema({
    facultyemail: {
        type: String,
        required: true
    },
    leavedate: {
        type: Date,
        required: true
    },
    facultymessage: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Pending",
        enum: ["Pending", "Rejected", "Approved"]
    }
})

const facultyleave = mongoose.model('facultyleave', FacultyLeaveModel)
module.exports = facultyleave