import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AdminNavbar from '../components/AdminNavbar'

function AdminAttendance() {

    const [students, setStudents] = useState([])

    const [checked, setChecked] = useState({
        Student: students._id,
        date: '',
        checked: false
    })

    const handleChange = (e) => {
        setChecked({ ...checked, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/adminstudentattendance')
        .then(res => {
            alert(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        console.log(checked)
    }

    useEffect(() => {
        axios.get('http://localhost:5000/adminstudentattendance')
            .then(students => {
                setStudents(students.data)
                setChecked(students.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <AdminNavbar />
            <div className='admin-students-attendance-container' style={{ marginTop: "10px" }}>
                <center><h4>Students Attendance</h4></center>
                <div className='container'>
                    <form onSubmit={handleSubmit}>
                        <input className='date' type='date' name='date' onChange={handleChange} />
                        <button className='btn btn-primary'>Save Changes</button>
                    </form>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Lastname</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">Email</th>
                                <th scope="col">Course</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            students.map((s, i) => (

                                <tbody>
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td name='firstname' onChange={handleChange}>{s.firstname}</td>
                                        <td name='lastname' onChange={handleChange}>{s.lastname}</td>
                                        <td>{s.gender}</td>
                                        <td>{s.mobilenumber}</td>
                                        <td>{s.email}</td>
                                        <td name='course' onChange={handleChange}>{s.coursename}</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <input name='checked' onChange={handleChange} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
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

export default AdminAttendance