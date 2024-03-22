import './App.css';
import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import AdminHomepage from './screens/AdminHomepage';
import StudentHomepage from './screens/StudentHomepage';
import StudentProfile from './screens/StudentProfile';
import AdminCourses from './screens/AdminCourses';
import AddCourses from './screens/AddCourses';
import AdminStudents from './screens/AdminStudents';
import AdminAddStudents from './screens/AdminAddStudents';
import AdminFaculty from './screens/AdminFaculty';
import AdminAddFaculty from './screens/AdminAddFaculty';
import AdminEvents from './screens/AdminEvents';
import AdminAddEvents from './screens/AdminAddEvents';
import AdminClassShedule from './screens/AdminClassShedule';
import AdminStudentAttendance from './screens/AdminStudentAttendance';
import AdminFacultyAttendance from './screens/AdminFacultyAttendance';
import AdminFees from './screens/AdminFees';
import AdminAddFees from './screens/AdminAddFees';
import FacultyLogin from './screens/FacultyLogin';
import AdminViewStudents from './screens/AdminViewStudents';
import AdminLogin from './screens/AdminLogin';
import AdminProfile from './screens/AdminProfile';
import AdminViewFaculty from './screens/AdminViewFaculty';
import FacultyHomepage from './screens/FacultyHomepage';
import FacultyProfile from './screens/FacultyProfile';
import StudentEvents from './screens/StudentEvents';
import StudentClassShedule from './screens/StudentClassShedule';
import StudentExamShedule from './screens/StudentExamShedule';
import AdminSubjects from './screens/AdminSubjects'
import AdminAddSubjects from './screens/AdminAddSubjects';
import StudentMessageNotification from './screens/StudentMessageNotification';
import AdminMessages from './screens/AdminMessages';
import AdminSendMessages from './screens/AdminSendMessages';
import FacultyAnnouncements from './screens/FacultyAnnouncements';
import FacultyViewStudents from './screens/FacultyViewStudents';
import FacultyViewEvents from './screens/FacultyViewEvents';
import FacultyStudentAttendance from './screens/FacultyStudentAttendance';
import SubjectAssign from './screens/SubjectAssign';
import AddSubjectsAssign from './screens/AddSubjectsAssign';
import FacultyLeave from './screens/FacultyLeave';
import FacultyLeaveTrans from './screens/FacultyLeaveTrans';
import AdminFacultyLeaveTrans from './screens/AdminFacultyLeaveTrans';
import AdminEditFacultyLeave from './screens/AdminEditFacultyLeave';
import StudentLeave from './screens/StudentLeave';
import StudentLeaveTrans from './screens/StudentLeaveTrans';
import AdminStudentLeaveTrans from './screens/AdminStudentLeaveTrans';
import AdminEditStudentLeave from './screens/AdminEditStudentLeave'
import AdminLibrary from './screens/AdminLibrary';
import AdminLibraryBooks from './screens/AdminLibraryBooks';
import AdminBooksCategory from './screens/AdminBooksCategory';
import AddBooksCategory from './screens/AddBooksCategory';
import AddLibraryBooks from './screens/AddLibraryBooks';
import StudentIssueBooks from './screens/StudentIssueBooks';
import StudentBooksTrans from './screens/StudentBooksTrans';
import NotFound from './screens/NotFound';

export const store = createContext();

function App() {

  const [token, setToken] = useState(null)
  return (
    <div className="">
      <store.Provider value={[token, setToken]}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />

            {/* <Route path='/register' element={<Register />} /> */}

            { /* Admin Routes*/}
            
            <Route path='/adminlogin' element={<AdminLogin />} />
            <Route path='/adminhomepage' element={<AdminHomepage />} />
            <Route path='/adminprofile' element={<AdminProfile />} />
            <Route path='/admincourses' element={<AdminCourses />} />
            <Route path='/addcourse' element={<AddCourses />} />
            <Route path='/adminstudents' element={<AdminStudents />} />
            <Route path='/admin-add-students' element={<AdminAddStudents />} />
            <Route path='/adminfaculty' element={<AdminFaculty />} />
            <Route path='/adminaddfaculty' element={<AdminAddFaculty />} />
            <Route path='/adminevents' element={<AdminEvents />} />
            <Route path='/addevents' element={<AdminAddEvents />} />
            <Route path='/adminclassshedule' element={<AdminClassShedule />} />
            <Route path='/adminstudentattendance' element={<AdminStudentAttendance />} />
            <Route path='/adminfacultyattendance' element={<AdminFacultyAttendance />} />
            <Route path='/adminfees' element={<AdminFees />} />
            <Route path='/admin-add-fees' element={<AdminAddFees />} />
            <Route path='/adminviewstudents/:id' element={<AdminViewStudents />} />
            <Route path='/adminviewfaculty/:id' element={<AdminViewFaculty />} />
            <Route path='/adminsubjects' element={<AdminSubjects /> } />
            <Route path='/addsubjects' element={<AdminAddSubjects />} />
            <Route path='/adminmessages' element={<AdminMessages />} />
            <Route path='/adminsendmessage' element={<AdminSendMessages />} />
            <Route path='/assign' element={<SubjectAssign />} />
            <Route path='/addsubjectassign' element={<AddSubjectsAssign />} />
            <Route path='/adminfacultyleavetrans' element={<AdminFacultyLeaveTrans />} />
            <Route path='/admineditfacultyleave/:id' element={<AdminEditFacultyLeave />} />
            <Route path='/adminfacultyleavetrans' element={<AdminFacultyLeaveTrans />} />
            <Route path='/adminstudentleavetrans' element={<AdminStudentLeaveTrans />} />
            <Route path='/admineditstudentleave/:id' element={<AdminEditStudentLeave />} />
            <Route path='/adminlibrary' element={<AdminLibrary />} />
            <Route path='/addlibrarybooks' element={<AddLibraryBooks />} />
            <Route path='/adminlibrarybooks' element={<AdminLibraryBooks />} />
            <Route path='/adminlibrarybookscategory' element={<AdminBooksCategory />} />
            <Route path='/addbookscategory' element={<AddBooksCategory />} />

            { /* Student Routes */}

            <Route path='*' element={<NotFound />} />

            <Route path='/login' element={<Login />} />
            <Route path='/studenthomepage' element={<StudentHomepage />} />
            <Route path='/studentprofile' element={<StudentProfile />} />
            <Route path='/studentevents' element={<StudentEvents />} />
            <Route path='/studentclassshedule' element={<StudentClassShedule />} />
            <Route path='/studentexamshedule' element={<StudentExamShedule />} />
            <Route path='/studentmessagenotification' element={<StudentMessageNotification />} />
            <Route path='/studentleave' element={<StudentLeave />} />
            <Route path='/studentleavetrans' element={<StudentLeaveTrans />} />
            <Route path='/studentissuebooks' element={<StudentIssueBooks />} />
            {/* <Route path='/studentbookstrans' element={<StudentBooksTrans />} /> */}

            { /* Faculty Routes */}

            <Route path='/facultylogin' element={<FacultyLogin />} />
            <Route path='/facultyhomepage' element={<FacultyHomepage />} />
            <Route path='/facultyprofile' element={<FacultyProfile />} />
            <Route path='/facultyannouncements' element={<FacultyAnnouncements />} />
            <Route path='/facultyviewstudents' element={<FacultyViewStudents />} />
            <Route path='/facultyviewsevents' element={<FacultyViewEvents />} />
            <Route path='/facultystudentattendance' element={<FacultyStudentAttendance />} />
            <Route path='/facultyleave' element={<FacultyLeave />} />
            <Route path='/facultyleavetrans' element={<FacultyLeaveTrans />} />

          </Routes>
        </BrowserRouter>
      </store.Provider>
    </div>
  );
}

export default App;
