const mongoose = require('mongoose')

const CourseModel = new mongoose.Schema({
    coursename: {
        type: String,
        required: true
    },
    intake: {
        type: Number,
        required: true
    }
})

const courses = mongoose.model('courses', CourseModel)
module.exports = courses