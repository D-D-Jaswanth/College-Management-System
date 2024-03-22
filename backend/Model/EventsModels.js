const mongoose = require('mongoose')

const EventsModel = new mongoose.Schema({
    eventname: {
        type: String,
        required: true
    },
    organized: {
        type: String,
        required: true
    },
    eventdate: {
        type: Date,
        required: true
    },
    guests: {
        type: Number,
        required: true
    }
})

const events = mongoose.model('events', EventsModel)
module.exports = events