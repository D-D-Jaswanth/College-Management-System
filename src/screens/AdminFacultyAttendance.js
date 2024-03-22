import React, { useState, useEffect } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import axios from 'axios'

function AdminFacultyAttendance() {

    const [facultyData, setFacultyData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/adminfaculty')
            .then(facultyData => {
                setFacultyData(facultyData.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <AdminNavbar />
            <div className='admin-faculty-attendance-container' style={{ marginTop: "10px", marginBottom: "10px" }}>
                <center><h4>Faculty Attendance</h4></center>
                <div className='container'>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Lastname</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">Email</th>
                                <th scope='col'>Subject</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            facultyData.map((f, i) => (

                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{f.firstname}</td>
                                        <td>{f.lastname}</td>
                                        <td>{f.gender}</td>
                                        <td>{f.mobilenumber}</td>
                                        <td>{f.email}</td>
                                        <td>{f.subject}</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>

                            ))
                        }
                    </table>
                </div>
            </div>
        </>
    )
}

export default AdminFacultyAttendance