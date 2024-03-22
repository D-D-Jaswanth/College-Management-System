const mongoose = require('mongoose')

const mongodb = async () => {
    try{
        mongoose.connect('mongodb://127.0.0.1:27017/college')
        console.log("Connected to the Database")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = mongodb