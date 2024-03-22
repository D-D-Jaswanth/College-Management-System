import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AdminNavbar from '../components/AdminNavbar'
import { Link } from 'react-router-dom'

function AdminStudents() {

    const [students, setStudents] = useState([])

    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/adminstudents')
            .then(students => {
                setStudents(students.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/adminstudents/' + id)
            .then(res => {
                alert('Student Record Deleted')
                window.location.reload()
            })
            .catch(err => {
                alert('Something Went Wrong !')
            })
    }

    return (
        <>
            <AdminNavbar />
            <div className='admin-students-container' style={{ marginTop: "10px" }}>
                <center><h4>Students</h4></center>
                <div className='container'>
                    <Link to='/admin-add-students' className='link btn btn-primary'>Add</Link>
                    <input class="form-control" onChange={(e) => setSearch(e.target.value)} list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
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
                            students.filter(s => {
                                return search.toLowerCase() === ''
                                ? s
                                : s.firstname.toLowerCase().includes(search)
                            }).map((s, i) => (

                                <tbody>
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{s.firstname}</td>
                                        <td>{s.lastname}</td>
                                        <td>{s.gender}</td>
                                        <td>{s.mobilenumber}</td>
                                        <td>{s.email}</td>
                                        <td>{s.coursename}</td>
                                        <td style={{ display: "flex", gap: "10px" }}>
                                            <Link to={`/adminviewstudents/${s._id}`} className='btn btn-primary'>View</Link>
                                            <Link className='btn btn-danger' onClick={(e) => { handleDelete(s._id) }}>Delete</Link>
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

export default AdminStudents