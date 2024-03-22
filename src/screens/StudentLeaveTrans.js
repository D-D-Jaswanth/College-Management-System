import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import StudentNavbar from '../components/StudentNavbar'
import moment from 'moment'
import { store } from '../App'
import { useNavigate } from 'react-router-dom'

function StudentLeaveTrans() {

    const [studentleave, setStudentLeave] = useState([])

    const [token, setToken] = useContext(store)
    const [studentData, setStudentData] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:5000/studentleavetrans')
            .then(studentleave => {
                setStudentLeave(studentleave.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5000/studentprofile', {
            headers: {
                'x-token': token
            }
        })
            .then(res => {
                setStudentData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    if (!token) {
        navigate('/')
    }

    return (
        <>
            <StudentNavbar />
            <div className='faculty-leave'>

                <center><h4>Leave Transaction</h4></center>

                <div className='container'>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Transaction Date</th>
                                <th scope="col">Leave Date</th>
                                <th scope="col">Email</th>
                                <th scope="col">Message</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        {
                            studentleave.map((s, i) => (
                                <tbody>
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{moment(s.createdAt).add(0, 'days').format('YYYY-MM-DD')}</td>
                                        <td>{moment(s.leavedate).add(0, 'days').format('YYYY-MM-DD')}</td>
                                        <td>{s.studentemail}</td>
                                        <td>{s.studentmessage}</td>
                                        <td>{s.status}</td>
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

export default StudentLeaveTrans