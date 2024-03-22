import React, { useState, useContext, useEffect } from 'react'
import { store } from '../App'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function StudentNavbar() {
    const [token, setToken] = useContext(store)
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:5000/studenthomepage', {
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
                                <Link to='/studenthomepage' class="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/studentprofile' class="nav-link" aria-current="page">Profile</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shedules
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link to='/studentclassshedule' class="dropdown-item">Class Shedule</Link></li>
                                    <li><Link to='/studentexamshedule' class="dropdown-item">Exam Shedules</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link to='/studentevents' class="nav-link">Events</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/studentmessagenotification' class="nav-link">Notifications</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Student Leave
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link to='/studentleave' class="dropdown-item">Apply For Leave</Link></li>
                                    <li><Link to='/studentleavetrans' class="dropdown-item">Leave Transactions</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Issue Books
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link to='/studentissuebooks' class="dropdown-item">Issue Books</Link></li>
                                    {/* <li><Link to='/studentbookstrans' class="dropdown-item">Books Transactions</Link></li> */}
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link onClick={() => setToken(null)} class="nav-link">Logout</Link>
                            </li>
                        </ul>
                        {/* <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default StudentNavbar