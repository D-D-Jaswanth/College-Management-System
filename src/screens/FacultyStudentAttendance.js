import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FacultyNavbar from '../components/FacultyNavbar'

function FacultyStudentAttendance() {

    // const [students, setStudents] = useState([])

    const [subject, setSubject] = useState([])

    const [course, setCourse] = useState([])

    const [id, setId] = useState('')

    // useEffect(() => {
    //     axios.get('http://localhost:5000/facultystudentattendance')
    //         .then(students => {
    //             setStudents(students.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [])



    useEffect(() => {
        axios.get('http://localhost:5000/admincourses')
            .then(course => {
                setCourse(course.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    const handleChange = (e) => {
        setCourse(e.target.value)
        setSubject(course.find(c => c.coursename === e.target.value).subject)
    }

    useEffect(() => {
        axios.get('http://localhost:5000/adminsubjects')
        .then(subject => {
            setSubject(subject.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <FacultyNavbar />
            <div className='faculty-students-attendance-container' style={{ marginTop: "10px" }}>
                <center><h4>Students Attendance</h4></center>
                <div className='container'>
                    <div class="row">
                        <div class="col">
                            <label htmlFor='Course'>Course</label>
                            <select name='Course' class="form-select" onChange={handleChange} aria-label="Default select example">
                                <option disabled='' selected=''>Select Course</option>
                                {
                                    course.map((c, i) => (
                                        <option value={c.coursename}>{c.coursename}</option>

                                    ))
                                }
                            </select>
                        </div>
                        <div class="col">
                                <label htmlFor='Subject'>Subject</label>
                                <select name='Subject' class="form-select" aria-label="Default select example">
                                    <option disabled='' selected=''>Select Subject</option>
                                    {
                                        subject.map((s, i) => (
                                            <option value={s.subject}>{s.subject}</option>

                                        ))
                                    }
                                </select>
                            </div>
                    </div>
                    {/* <table class="table table-bordered">
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
                                        <td>{s.firstname}</td>
                                        <td>{s.lastname}</td>
                                        <td>{s.gender}</td>
                                        <td>{s.mobilenumber}</td>
                                        <td>{s.email}</td>
                                        <td>{s.coursename}</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>

                            ))
                        }
                    </table> */}
                </div>
            </div>
        </>
    )
}

export default FacultyStudentAttendance