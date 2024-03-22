const mongoose = require('mongoose')

const SubjectAssignModel = new mongoose.Schema({
    Subject: {
        type: String,
        required: true
    },
    Course: {
        type: String,
        required: true
    },
    FacultyName : {
        type: String,
        required: true
    }
})

const subjectassign = mongoose.model('subjectassign', SubjectAssignModel)
module.exports = subjectassign