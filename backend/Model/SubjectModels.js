const mongoose = require('mongoose')

const SubjectModel = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    }
})

const subject = mongoose.model('subject', SubjectModel)
module.exports = subject