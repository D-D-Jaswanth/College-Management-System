import React, {useState, useEffect } from 'react'
import axios from 'axios'
import FacultyNavbar from '../components/FacultyNavbar'

function FacultyViewStudents() {

    const [students, setStudents] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/facultyviewstudents')
        .then(students => {
            setStudents(students.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <FacultyNavbar />
            <div className='faculty-view-students'>
                <center><h4>View Students</h4></center>
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
                                <th scope="col">Course</th>
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

export default FacultyViewStudents