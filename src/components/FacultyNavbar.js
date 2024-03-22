import React, { useState, useEffect, useContext } from 'react'
import { store } from '../App'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function FacultyNavbar() {

    const [token, setToken] = useContext(store)
    const [data, setData] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:5000/facultyhomepage', {
            headers: {
                'x-token': token
            }
        })
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    if (!token) {
        navigate('/')
    }

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
                                <Link to='/facultyhomepage' class="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/facultyprofile' class="nav-link" aria-current="page">Profile</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/facultyviewsevents' class="nav-link" href="#">Events</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Students
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link to='/facultyviewstudents' class="dropdown-item">View Students</Link></li>
                                    <li><Link to='/facultystudentattendance' class="dropdown-item">Attendance</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link to='/facultyleave' class="nav-link">Apply For Leave</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/facultyleavetrans' class="nav-link">Transactions</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/facultyannouncements' class="nav-link">Announcements</Link>
                            </li>
                            <li class="nav-item">
                                <Link onClick={() => setToken(null)} class="nav-link">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default FacultyNavbar