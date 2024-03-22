import React, { useState, useEffect } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { Link } from 'react-router-dom'
import axios from 'axios'

function AdminCourses() {

    const [course, setCourse] = useState([])

    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/admincourses')
            .then(course => {
                setCourse(course.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/admincourses/' + id)
            .then(res => {
                alert('Course Deleted')
                window.location.reload()
            })
            .catch(err => {
                alert('Something Went Wrong !')
            })
    }

    return (
        <>
            <AdminNavbar />
            <div className='admin-courses' style={{ marginTop: "10px" }}>
                <center><h4>Courses</h4></center>
                <div className="container">
                    <Link to='/addcourse' className='course-link btn btn-primary'>Add Courses</Link>
                    <input class="form-control" onChange={(e) => setSearch(e.target.value)} list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Course Name</th>
                                <th scope="col">Intake</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            course.filter(c => {
                                return search.toLowerCase() === ''
                                ? c
                                : c.coursename.toLowerCase().includes(search)
                            }).map((c, i) => (

                                <tbody>
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{c.coursename}</td>
                                        <td>{c.intake}</td>
                                        <td>
                                            <button className='btn btn-danger' onClick={(e) => { handleDelete(c._id) }}>Delete</button>
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

export default AdminCourses