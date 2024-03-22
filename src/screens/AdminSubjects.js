import React, { useState, useEffect } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { Link } from 'react-router-dom'
import axios from 'axios'

function AdminSubjects() {

    const [subject, setSubject] = useState([])

    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/adminsubjects')
            .then(subject => {
                setSubject(subject.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/adminsubjects/' + id)
            .then(res => {
                alert('Subject Deleted')
                window.location.reload()
            })
            .catch(err => {
                alert('Something Went Wrong !')
            })
    }

    return (
        <>
            <AdminNavbar />
            <div className='admin-subjects' style={{ marginTop: "10px" }}>
                <center><h4>Subjects</h4></center>
                <div className="container">
                    <Link to='/addsubjects' className='events-link btn btn-primary'>Add Subjects</Link>
                    <input class="form-control" onChange={(e) => setSearch(e.target.value)} list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Course</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            subject.filter(s => {
                                return search.toLowerCase() === ''
                                ? s
                                : s.course.toLowerCase().includes(search)
                            }).map((s, i) => (
                                <tbody>
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{s.subject}</td>
                                        <td>{s.course}</td>
                                        <td>
                                            <button className='btn btn-danger' onClick={(e) => { handleDelete(s._id) }}>Delete</button>
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

export default AdminSubjects