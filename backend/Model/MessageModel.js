const mongoose = require('mongoose')

const MessageModel = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Message = mongoose.model("Message", MessageModel)
module.exports = Message