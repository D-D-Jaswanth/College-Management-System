import React, { useState , useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import AdminNavbar from '../components/AdminNavbar'
import { Link } from 'react-router-dom'

function AdminStudentLeaveTrans() {

    const [studentleave, setStudentLeave] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/studentleavetrans')
            .then(studentleave => {
                setStudentLeave(studentleave.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <AdminNavbar />
            <div className='faculty-leave'>

                <center><h4>Student Leave Transaction</h4></center>

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
                                studentleave.map((s, i) => (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{moment(s.leavedate).add(0, 'days').format('YYYY-MM-DD')}</td>
                                        <td>{s.studentemail}</td>
                                        <td>{s.studentmessage}</td>
                                        <td><span style={{color: "#fff", background: "red", padding: "2px", borderRadius: "5px"}}>{s.status}</span></td>
                                        <td>
                                            <Link to={`/admineditstudentleave/${s._id}`} class="btn btn-primary">
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

export default AdminStudentLeaveTrans