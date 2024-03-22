const express = require('express')
const jwt = require('jsonwebtoken')

const AdminModel = require('../Model/AdminModels')
const StudentModel = require('../Model/StudentModels')
const FacultyModel = require('../Model/FacultyModels')
const EventsModel = require('../Model/EventsModels')
const MessageModel = require('../Model/MessageModel')
const CourseModel = require('../Model/CourseModels')
const SubjectModel = require('../Model/SubjectModels')
const SubjectAssignModel = require('../Model/SubjectAssignModels')
const FeeModel = require('../Model/FeesModels')
const StudentAttendanceModel = require('../Model/StudentsAttendanceModels')
const FacultyLeaveModel = require('../Model/FacultyLeaveModel')
const StudentLeaveModel = require('../Model/StudentLeaveModel')
const BooksCategoryModel = require('../Model/BooksCategoryModel')
const BooksModel = require('../Model/BooksModel')
const books = require('../Model/BooksModel')

const demo = (req, res) => {
    res.send('Hello World')
}

const AdminLogin = async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw "Please Provide All Details"
        }
        let exist = await AdminModel.findOne({ email })

        if (!exist) {
            return res.status(400).send("Admin Not Found")
        }

        let payload = {
            user: {
                id: exist.id
            }
        }

        jwt.sign(payload, 'jwtSecret', { expiresIn: 3600000 },

            (err, token) => {
                if (err) throw err
                return res.json({ token })
            }
        )
    }
    catch (err) {
        return res.status(500).send('Internal Server Error')
    }
}

const StudentLogin = async (req, res) => {

    try {
        const { email, mobilenumber } = req.body;
        if (!email || !mobilenumber) {
            throw "Please Provide All Details"
        }

        let exist = await StudentModel.findOne({ email: email });

        if (!exist) {
            return res.status(400).send("User Not Found")
        }

        let payload = {
            user: {
                id: exist.id
            }
        }

        jwt.sign(payload, 'jwtSecret', { expiresIn: 3600000 },

            (err, token) => {
                if (err) throw err
                return res.json({ token })
            }
        )
    }

    catch (err) {
        return res.status(400).send("Internal Server Error")
    }

}


const FacultyLogin = async (req, res) => {

    try {
        const { email, mobilenumber } = req.body;
        if (!email || !mobilenumber) {
            throw "Please Provide All Details"
        }

        let exist = await FacultyModel.findOne({ email: email });

        if (!exist) {
            return res.status(400).send("Faculty Not Found")
        }

        let payload = {
            user: {
                id: exist.id
            }
        }

        jwt.sign(payload, 'jwtSecret', { expiresIn: 3600000 },

            (err, token) => {
                if (err) throw err
                return res.json({ token })
            }
        )
    }

    catch (err) {
        return res.status(400).send("Internal Server Error")
    }

}

const FacultyHomePage = async (req, res) => {
    try {
        let exist = await FacultyModel.findById(req.user.id)
        if (!exist) {
            return res.status(400).send('Faculty Not Found')
        }
        res.json(exist);
    }
    catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error')
    }
}


const FacultyProfile = async (req, res) => {
    try {
        let exist = await FacultyModel.findById(req.user.id)
        if (!exist) {
            return res.status(400).send('faculty Not Found')
        }
        res.json(exist);
    }
    catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error')
    }
}


const FacultyViewStudents = (req, res) => {
    StudentModel.find()
        .then(students => {
            res.json(students)
        })
        .catch(err => {
            res.json(err)
        })
}

const FacultyStudentAttendance = (req, res) => {
    StudentModel.find()
        .then(students => {
            res.json(students)
        })
        .catch(err => {
            res.json(err)
        })
}

const FacultyViewEvents = (req, res) => {
    EventsModel.find()
        .then(events => {
            res.json(events)
        })
        .catch(err => {
            res.json(err)
        })
}

const FacultyAnnouncements = (req, res) => {
    MessageModel.find()
        .then(faculty => {
            res.json(faculty)
        })
        .catch(err => {
            res.json(err)
        })
}


const StudentHomePage = async (req, res) => {
    try {
        let exist = await StudentModel.findById(req.user.id)
        if (!exist) {
            return res.status(400).send('User Not Found')
        }
        res.json(exist);
    }
    catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error')
    }
}

const StudentProfile = async (req, res) => {
    try {
        let exist = await StudentModel.findById(req.user.id)
        if (!exist) {
            return res.status(400).send('User Not Found')
        }
        res.json(exist);
    }
    catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error')
    }
}

const StudentEvents = (req, res) => {
    EventsModel.find()
        .then(events => {
            res.json(events)
        })
        .catch(err => {
            res.json(err)
        })
}

const StudentMessageNotification = (req, res) => {
    MessageModel.find()
        .then(message => {
            res.json(message)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminAddCourse = async (req, res) => {

    try {

        const { coursename, intake } = req.body;

        let exist = await CourseModel.findOne({ coursename })
        if (exist) {
            res.status(400).send('Course Exist')
        }
        let newCourse = new CourseModel({
            coursename,
            intake
        })
        await newCourse.save()
        res.status(200).send('Course Added')

    }
    catch (err) {
        res.status(500).send('Internal Server Error')
    }
}

const AdminCourse = (req, res) => {
    CourseModel.find()
        .then(course => {
            res.json(course)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminDeleteCourse = (req, res) => {
    const id = req.params.id;
    CourseModel.findByIdAndDelete({ _id: id })
        .then(course => {
            res.json(course)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminAddEvents = async (req, res) => {

    try {

        const { eventname, organized, eventdate, guests } = req.body;

        let exist = await EventsModel.findOne({ eventname })

        if (exist) {
            return res.status(400).send('Event Exist')
        }

        let newEvent = new EventsModel({
            eventname,
            organized,
            eventdate,
            guests
        })
        await newEvent.save()
        res.status(200).send('Event Added')

    }
    catch (err) {
        res.status(500).send('Internal Server Error')
    }
}

const AdminEvents = (req, res) => {
    EventsModel.find()
        .then(events => {
            res.json(events)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminDeleteEvents = (req, res) => {
    const id = req.params.id;
    EventsModel.findByIdAndDelete({ _id: id })
        .then(events => {
            res.json(events)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminAddFees = async (req, res) => {

    try {

        const { coursename, fee } = req.body;

        let exist = await FeeModel.findOne({ coursename })

        if (exist) {
            return res.status(400).send('Event Exist')
        }

        let newFee = new FeeModel({
            coursename,
            fee
        })
        await newFee.save()
        res.status(200).send('Fees Added')

    }
    catch (err) {
        res.status(500).send('Internal Server Error')
    }
}

const AdminFees = (req, res) => {
    FeeModel.find()
        .then(fees => {
            res.json(fees)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminDeleteFees = (req, res) => {
    const id = req.params.id;
    FeeModel.findByIdAndDelete({ _id: id })
        .then(fees => {
            res.json(fees)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminAddStudents = async (req, res) => {
    try {
        const { firstname, lastname, dob,
            gender, mobilenumber, email, coursename, address,
            city, state, pincode, fathername, fatheroccupation,
            mothername, motheroccupation } = req.body;

        let exist = await StudentModel.findOne({ firstname, lastname })

        if (exist) {
            return res.status(400).send("Student Already Exist")
        }
        let newStudent = new StudentModel({
            firstname, lastname, dob, gender, mobilenumber,
            email, coursename, address, city, state, pincode,
            fathername, fatheroccupation, mothername, motheroccupation
        })
        await newStudent.save()
        res.status(200).send('Application Submitted')
    }
    catch (err) {
        return res.status(500).send("Internal Server Error")
    }
}

const AdminStudents = (req, res) => {
    StudentModel.find()
        .then(students => {
            res.json(students)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminViewStudents = (req, res) => {
    const id = req.params.id
    StudentModel.findById({ _id: id })
        .then(studentData => {
            res.json(studentData)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminDeleteStudents = (req, res) => {
    const id = req.params.id;
    StudentModel.findByIdAndDelete({ _id: id })
        .then(students => {
            res.json(students)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminAddFaculty = async (req, res) => {
    try {
        const { firstname, lastname, dob,
            gender, mobilenumber, email, address,
            city, state, pincode, husbandname, husbandoccupation,
            educational, subject, experience, previouscollege } = req.body;

        let exist = await FacultyModel.findOne({ firstname, lastname })

        if (exist) {
            return res.status(400).send("Faculty Already Exist")
        }

        let newFaculty = new FacultyModel({
            firstname, lastname, dob, gender, mobilenumber,
            email, address, city, state, pincode,
            husbandname, husbandoccupation, educational, subject, experience,
            previouscollege
        })
        await newFaculty.save()
        res.status(200).send('Application Submitted')
    }
    catch (err) {
        return res.status(500).send("Internal Server Error")
    }
}

const AdminFaculty = (req, res) => {
    FacultyModel.find()
        .then(facultyData => {
            res.json(facultyData)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminDeleteFaculty = (req, res) => {
    const id = req.params.id;
    FacultyModel.findByIdAndDelete({ _id: id })
        .then(facultyData => {
            res.json(facultyData)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminViewFaculty = (req, res) => {
    const id = req.params.id
    FacultyModel.findById({ _id: id })
        .then(facultyData => {
            res.json(facultyData)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminStudentAttendance = (req, res) => {
    StudentModel.find()
        .then(students => {
            res.json(students)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminAddSubjects = async (req, res) => {

    try {

        const { subject, course } = req.body;

        let newSubject = new SubjectModel({
            subject,
            course
        })
        await newSubject.save()
        res.status(200).send('Subject Added')

    }
    catch (err) {
        res.status(500).send('Internal Server Error')
    }
}

const AdminSubjects = (req, res) => {
    SubjectModel.find()
        .then(subject => {
            res.json(subject)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminDeleteSubjects = (req, res) => {
    const id = req.params.id;
    SubjectModel.findByIdAndDelete({ _id: id })
        .then(subject => {
            res.json(subject)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminSendMessages = async (req, res) => {

    try {
        const { email, subject, message } = req.body;

        let newMessage = new MessageModel({
            email,
            subject,
            message
        })
        await newMessage.save()
        res.status(200).send('Message Sent')
    }
    catch (err) {
        return res.status(500).send('Internal Server Error')
    }
}

const AdminMessages = (req, res) => {
    MessageModel.find()
        .then(adminMessage => {
            res.json(adminMessage)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminDeleteMessages = (req, res) => {
    const id = req.params.id;
    MessageModel.findByIdAndDelete({ _id: id })
        .then(adminMessage => {
            res.json(adminMessage)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminAddSubjectsAssign = async (req, res) => {
    try {
        const { Subject, Course, FacultyName } = req.body;

        let newSubjectAssign = new SubjectAssignModel({
            Subject,
            Course,
            FacultyName
        })
        await newSubjectAssign.save()
        res.status(200).send('Subject Assigned')
    }
    catch (err) {
        return res.status(500).send('Internal Server Error')
    }
}

const AdminAssign = (req, res) => {
    SubjectAssignModel.find()
        .then(assign => {
            res.json(assign)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminDeleteAssign = (req, res) => {
    const id = req.params.id;
    SubjectAssignModel.findByIdAndDelete({ _id: id })
        .then(assign => {
            res.json(assign)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminTakeStudentAttendance = async (req, res) => {

    try {

        const { Student, date, checked } = req.body;

        let newStudentAttendance = new StudentAttendanceModel({
            Student,
            date,
            checked
        })
        await newStudentAttendance.save()
        res.status(200).send('Attendance Saved')

    }

    catch (err) {
        return res.status(500).send('Internal Server Error')
    }
}


const FacultyLeave = async (req, res) => {

    try {

        const { facultyemail, leavedate, facultymessage } = req.body;

        let newFacultyLeave = new FacultyLeaveModel({
            facultyemail,
            leavedate,
            facultymessage
        })

        newFacultyLeave.save()
        res.status(200).send('Leave Requested Successfully')

    }
    catch (err) {
        res.status(500).send('Internal Server Error')
    }

}

const FacultyLeaveData = (req, res) => {
    FacultyLeaveModel.find()
        .then(facultyleave => {
            res.json(facultyleave)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminFacultyLeaveData = (req, res) => {
    FacultyLeaveModel.find()
        .then(facultyleave => {
            res.json(facultyleave)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminEditFacultyLeaveData = (req, res) => {
    const id = req.params.id;
    FacultyLeaveModel.findById({ _id: id })
        .then(facultyleave => {
            res.json(facultyleave)
        })
        .catch(err => {
            res.json(err)
        })
}

const EditFacultyLeave = (req, res) => {
    const id = req.params.id;
    FacultyLeaveModel.findByIdAndUpdate({ _id: id }, { status: req.body.status })
        .then(facultyleave => {
            res.json(facultyleave)
        })
        .catch(err => {
            res.json(err)
        })
}

const StudentLeave = async (req, res) => {

    try {

        const { studentemail, leavedate, studentmessage } = req.body;

        let newStudentLeave = new StudentLeaveModel({
            studentemail,
            leavedate,
            studentmessage
        })

        newStudentLeave.save()
        res.status(200).send('Leave Requested Successfully')

    }
    catch (err) {
        res.status(500).send('Internal Server Error')
    }

}

const StudentLeaveData = (req, res) => {
    StudentLeaveModel.find()
        .then(studentleave => {
            res.json(studentleave)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminEditStudentLeaveData = (req, res) => {
    const id = req.params.id;
    StudentLeaveModel.findById({ _id: id })
        .then(studentleave => {
            res.json(studentleave)
        })
        .catch(err => {
            res.json(err)
        })
}

const EditStudentLeave = (req, res) => {
    const id = req.params.id;
    StudentLeaveModel.findByIdAndUpdate({ _id: id }, { status: req.body.status })
        .then(studentleave => {
            res.json(studentleave)
        })
        .catch(err => {
            res.json(err)
        })
}

const AddBooksCategory = async (req, res) => {
    try {
        const { categoryname } = req.body;
        const exist = await BooksCategoryModel.findOne({ categoryname })
        if (exist) {
            res.status(409).send('Category is already Exist')
        }

        let newCategory = new BooksCategoryModel({
            categoryname
        })
        await newCategory.save()
        res.status(201).send('Category Added')
    }
    catch (e) {
        res.status(500).send('Internal Server Error')
    }
}

const AdminBooksCategory = (req, res) => {
    BooksCategoryModel.find({})
        .then(booksCategory => {
            res.json(booksCategory)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminDeleteCategory = (req, res) => {
    const id = req.params.id;
    BooksCategoryModel.findByIdAndDelete({ _id: id })
        .then(booksCategory => {
            res.json(booksCategory)
        })
        .catch(err => {
            res.json(err)
        })
}

const AdminAddBooks = async (req, res) => {
    try {
        const { isbnnumber, title, category, author, publisher, publishdate,
            availablebooks, status } = req.body

        const exist = await BooksModel.findOne({ title: title})

        if(exist){
            res.status(409).send('Books Already Exist')
        }

        let newBook = await BooksModel({
            isbnnumber, title,
            category, author,
            publisher, publishdate,
            availablebooks, status
        })

        await newBook.save()
        res.status(200).send('Books Added')

    }
    catch (err) {
        res.status(500).send('Internal Server Error')
    }
}

const AdminBooks = (req, res) => {
    BooksModel.find({})
    .then(books => {
        res.json(books)
    })
    .catch(err => {
        res.json(err)
    })
}

const AdminDeleteBooks = (req, res) => {
    const id = req.params.id;
    BooksModel.findByIdAndDelete({ _id: id })
        .then(books => {
            res.json(books)
        })
        .catch(err => {
            res.json(err)
        })
}

const StudentIssueBooks = (req, res) => {
    BooksModel.find({})
    .then(books => {
        res.json(books)
    })
    .catch(err => {
        res.json(err)
    })
}

module.exports = {
    demo, AdminLogin, StudentLogin, FacultyLogin,
    FacultyHomePage, FacultyProfile, FacultyViewStudents,
    FacultyStudentAttendance, FacultyViewEvents, FacultyAnnouncements,
    StudentHomePage, StudentProfile, StudentEvents, StudentMessageNotification,
    AdminAddCourse, AdminCourse, AdminDeleteCourse, AdminAddEvents, AdminEvents,
    AdminDeleteEvents, AdminAddFees, AdminFees, AdminDeleteFees,
    AdminAddStudents, AdminStudents, AdminViewStudents, AdminDeleteStudents,
    AdminAddFaculty, AdminFaculty, AdminDeleteFaculty, AdminViewFaculty,
    AdminStudentAttendance, AdminAddSubjects, AdminSubjects, AdminDeleteSubjects,
    AdminSendMessages, AdminMessages, AdminDeleteMessages, AdminAddSubjectsAssign,
    AdminAssign, AdminDeleteAssign, AdminTakeStudentAttendance, FacultyLeave,
    FacultyLeaveData, AdminFacultyLeaveData, AdminEditFacultyLeaveData,
    EditFacultyLeave, StudentLeave, StudentLeaveData, AdminEditStudentLeaveData,
    EditStudentLeave, AddBooksCategory, AdminBooksCategory, AdminDeleteCategory,
    AdminAddBooks, AdminBooks, AdminDeleteBooks, StudentIssueBooks
}