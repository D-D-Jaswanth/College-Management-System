import React, { useState, useEffect } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { Link } from 'react-router-dom'
import axios from 'axios'

function AdminStaff() {

    const [facultyData, setFacultyData] = useState([])

    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/adminfaculty')
            .then(facultyData => {
                setFacultyData(facultyData.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/adminfaculty/' + id)
            .then(res => {
                alert('Faculty Record Deleted')
                window.location.reload()
            })
            .catch(err => {
                alert('Something Went Wrong !')
            })
    }

    return (
        <>
            <AdminNavbar />
            <div className='admin-faculty-container' style={{ marginTop: "10px", marginBottom: "10px" }}>
                <center><h4>Faculty</h4></center>
                <div className='container'>
                    <Link to='/adminaddfaculty' className='link btn btn-primary'>Add</Link>
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
                                <th scope='col'>Subject</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            facultyData.filter(f => {
                                return search.toLowerCase() === ''
                                    ? f
                                    : f.firstname.toLowerCase().includes(search)
                            }).map((f, i) => (

                                <tbody>
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{f.firstname}</td>
                                        <td>{f.lastname}</td>
                                        <td>{f.gender}</td>
                                        <td>{f.mobilenumber}</td>
                                        <td>{f.email}</td>
                                        <td>{f.subject}</td>
                                        <td style={{ display: "flex", gap: "10px" }}>
                                            <Link to={`/adminviewfaculty/${f._id}`} className='btn btn-primary'>View</Link>
                                            <Link className='btn btn-danger' onClick={(e) => { handleDelete(f._id) }}>Delete</Link>
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

export default AdminStaff