import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary bg-primary" data-bs-theme="dark" style={{ padding: "1% 8%" }}>
                <div class="container-fluid">
                    <Link class="navbar-brand" style={{ fontSize: "30px", fontFamily: "cursive" }}>CMS</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse m-2" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-4 mb-lg-0 justify-content-center">
                            <li class="nav-item">
                                <Link to='/adminhomepage' class="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Add
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to='/adminstudents'>Students</Link></li>
                                    <li><Link class="dropdown-item" to='/adminfaculty'>Faculty</Link></li>
                                    <li><Link class="dropdown-item" to='/adminsubjects'>Subjects</Link></li>
                                    <li><Link class="dropdown-item" to='/assign'>Assign</Link></li>
                                    <li><Link to='/admincourses' class="dropdown-item">Courses</Link></li>
                                    <li><Link to='/adminevents' class="dropdown-item" href="#">Events</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shedules
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link to='/adminclassshedule' class="dropdown-item">Class Shedules</Link></li>
                                    <li><Link to='' class="dropdown-item">Exam Shedules</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Attendance
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to='/adminstudentattendance'>Student Attendance</Link></li>
                                    <li><Link class="dropdown-item" to='/adminfacultyattendance'>Faculty Attendance</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Leave Transactions
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to='/adminfacultyleavetrans'>Faculty Leave Transaction</Link></li>
                                    <li><Link class="dropdown-item" to='/adminstudentleavetrans'>Student Leave Transaction</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link to='/adminfees' class="nav-link">Fees</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Library
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to='/adminlibrary'>Library</Link></li>
                                    <li><Link class="dropdown-item" to='/adminlibrarybooks'>Add Books</Link></li>
                                    <li><Link class="dropdown-item" to='/adminlibrarybookscategory'>Add Category</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link to='/adminmessages' class="nav-link">Messages</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/' class="nav-link">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AdminNavbar