import React, { useState, useEffect } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

function SubjectAssign() {

    const [assign, setAssign] = useState([])

    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/assign')
            .then(assign => {
                setAssign(assign.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/assign/' + id)
            .then(res => {
                alert('Deleted')
                window.location.reload()
            })
            .catch(err => {
                alert('Something Went Wrong !')
            })
    }

    return (
        <>
            <AdminNavbar />
            <div className='admin-subjects-assign' style={{ marginTop: "10px" }}>
                <center><h4>Subjects Assign</h4></center>

                <div className="container">
                    <Link to='/addsubjectassign' className='events-link btn btn-primary'>Add Subjects</Link>
                    <input class="form-control" onChange={(e) => setSearch(e.target.value)} list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Course</th>
                                <th scope="col">Faculty Name</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            assign.filter(a => {
                                return search.toLowerCase() === ''
                                ? a
                                : a.Subject.toLowerCase().includes(search);
                            }).map((a, i) => (
                                <tbody>
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{a.Subject}</td>
                                        <td>{a.Course}</td>
                                        <td>{a.FacultyName}</td>
                                        <td>
                                            <button onClick={(e) => { handleDelete(a._id) }} className='btn btn-danger'>Delete</button>
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

export default SubjectAssign