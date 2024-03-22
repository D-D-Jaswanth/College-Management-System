const mongoose = require('mongoose')

const StudentLeaveModel = new mongoose.Schema({
    studentemail: {
        type: String,
        required: true
    },
    leavedate: {
        type: Date,
        required: true
    },
    studentmessage: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Pending",
        enum: ["Pending", "Rejected", "Approved"]
    }
},
    { timestamps: true }
)

const studentleave = mongoose.model('studentleave', StudentLeaveModel)
module.exports = studentleave