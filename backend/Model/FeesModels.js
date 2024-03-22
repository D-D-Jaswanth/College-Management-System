const mongoose = require('mongoose')

const FeeModel = new mongoose.Schema({
    coursename: {
        type: String,
        required: true
    },
    fee: {
        type: String,
        required: true
    }
})

const fees = mongoose.model('fees', FeeModel)
module.exports = fees