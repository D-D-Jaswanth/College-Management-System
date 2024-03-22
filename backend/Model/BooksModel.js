const mongoose = require('mongoose')

const BooksModel = new mongoose.Schema({
    isbnnumber: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    publishdate: {
        type: Date,
        required: true
    },
    availablebooks: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

const books = mongoose.model('books', BooksModel)
module.exports = books