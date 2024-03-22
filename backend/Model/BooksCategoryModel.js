const mongoose = require('mongoose')

const BooksCategoryModel = new mongoose.Schema({
    categoryname: {
        type: String,
        required: true
    }
})

const bookscategory = mongoose.model('bookscategory', BooksCategoryModel)
module.exports = bookscategory