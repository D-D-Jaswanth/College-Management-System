import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AdminNavbar from '../components/AdminNavbar'
import moment from 'moment'
import { Link } from 'react-router-dom'

function AdminFacultyLeaveTrans() {
    const [facultyleave, setFacultyLeave] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/adminfacultyleavetrans')
            .then(facultyleave => {
                setFacultyLeave(facultyleave.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <AdminNavbar />
            <div className='faculty-leave'>

                <center><h4>Faculty Leave Transaction</h4></center>

                <div className='container'>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date</th>
                                <th scope="col">Email</th>
                                <th scope="col">Message</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                facultyleave.map((l, i) => (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{moment(l.leavedate).add(0, 'days').format('YYYY-MM-DD')}</td>
                                        <td>{l.facultyemail}</td>
                                        <td>{l.facultymessage}</td>
                                        <td><span style={{color: "#fff", background: "red", padding: "2px", borderRadius: "5px"}}>{l.status}</span></td>
                                        <td>
                                            <Link to={`/admineditfacultyleave/${l._id}`} class="btn btn-primary">
                                                Edit Action
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AdminFacultyLeaveTrans