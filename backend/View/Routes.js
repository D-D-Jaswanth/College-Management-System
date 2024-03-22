const express = require('express')
const router = express.Router()

const { demo, AdminLogin, StudentLogin, FacultyLogin, 
    FacultyHomePage, FacultyProfile, FacultyViewStudents, 
    FacultyStudentAttendance, FacultyViewEvents, FacultyAnnouncements, 
    StudentHomePage, StudentProfile, StudentEvents, StudentMessageNotification, 
    AdminAddCourse, AdminCourse, AdminDeleteCourse, AdminAddEvents, AdminEvents, 
    AdminDeleteEvents, AdminAddFees, AdminFees, AdminDeleteFees, AdminAddStudents,
    AdminStudents, AdminViewStudents, AdminDeleteStudents, AdminAddFaculty, 
    AdminFaculty, AdminDeleteFaculty, AdminViewFaculty, AdminStudentAttendance, 
    AdminAddSubjects, AdminSubjects, AdminDeleteSubjects, AdminSendMessages, 
    AdminMessages, AdminDeleteMessages, AdminAddSubjectsAssign, AdminAssign, 
    AdminDeleteAssign, AdminTakeStudentAttendance, FacultyLeaveDetails, 
    FacultyLeave, FacultyLeaveData, AdminFacultyLeaveData, 
    AdminEditFacultyLeaveData, EditFacultyLeave, StudentLeave, StudentLeaveData, 
    AdminEditStudentLeaveData, EditStudentLeave, AddBooksCategory, AdminBooksCategory, 
    AdminDeleteCategory, AdminAddBooks, AdminBooks, AdminDeleteBooks, StudentIssueBooks
} = require('../Controller/authController')

const middleware = require('../middleware')

router.get('/', demo)

router.post('/adminlogin', AdminLogin)

router.post('/login', StudentLogin)

router.post('/facultylogin', FacultyLogin)

router.get('/facultyhomepage', middleware, FacultyHomePage)

router.get('/facultyprofile', middleware, FacultyProfile)

router.get('/facultyviewstudents', FacultyViewStudents)

router.get('/facultystudentattendance', FacultyStudentAttendance)

router.get('/facultyviewsevents', FacultyViewEvents)

router.get('/facultyannouncements', FacultyAnnouncements)

router.get('/studenthomepage', middleware, StudentHomePage)

router.get('/studentprofile', middleware, StudentProfile)

router.get('/studentevents', StudentEvents)

router.get('/studentmessagenotification', StudentMessageNotification)

router.post('/addcourse', AdminAddCourse)

router.get('/admincourses', AdminCourse)

router.delete('/admincourses/:id', AdminDeleteCourse)

router.post('/addevents', AdminAddEvents)

router.get('/adminevents', AdminEvents)

router.delete('/adminevents/:id', AdminDeleteEvents)

router.post('/admin-add-fees', AdminAddFees)

router.get('/adminfees', AdminFees)

router.delete('/adminfees/:id', AdminDeleteFees)

router.post('/admin-add-students', AdminAddStudents)

router.get('/adminstudents', AdminStudents)

router.get('/adminviewstudents/:id', AdminViewStudents)

router.delete('/adminstudents/:id', AdminDeleteStudents)

router.post('/adminaddfaculty', AdminAddFaculty)

router.get('/adminfaculty', AdminFaculty)

router.delete('/adminfaculty/:id', AdminDeleteFaculty)

router.get('/adminviewfaculty/:id', AdminViewFaculty)

router.get('/adminstudentattendance', AdminStudentAttendance)

router.post('/addsubjects', AdminAddSubjects)

router.get('/adminsubjects', AdminSubjects)

router.delete('/adminsubjects/:id', AdminDeleteSubjects)

router.post('/adminsendmessage', AdminSendMessages)

router.get('/adminmessages', AdminMessages)

router.delete('/adminmessages/:id', AdminDeleteMessages)

router.post('/addsubjectassign', AdminAddSubjectsAssign)

router.get('/assign', AdminAssign)

router.delete('/assign/:id', AdminDeleteAssign)

router.post('/adminstudentattendance', AdminTakeStudentAttendance)

router.post('/facultyleave', FacultyLeave)

router.get('/facultyleavetrans', FacultyLeaveData)

router.get('/adminfacultyleavetrans', AdminFacultyLeaveData)

router.get('/admineditfacultyleave/:id', AdminEditFacultyLeaveData)

router.put('/editfacultyleave/:id', EditFacultyLeave)

router.post('/studentleave', StudentLeave)

router.get('/studentleavetrans', StudentLeaveData)

router.get('/admineditstudentleave/:id', AdminEditStudentLeaveData)

router.put('/editstudentleave/:id', EditStudentLeave)

router.post('/addbookscategory', AddBooksCategory)

router.get('/adminlibrarybookscategory', AdminBooksCategory)

router.delete('/adminlibrarybookscategory/:id', AdminDeleteCategory)

router.post('/addlibrarybooks', AdminAddBooks)

router.get('/adminlibrarybooks', AdminBooks)

router.delete('/adminlibrarybooks/:id', AdminDeleteBooks)

router.get('/studentissuebooks', StudentIssueBooks)

module.exports = router