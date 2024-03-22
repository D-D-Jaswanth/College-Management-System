import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StudentNavbar from '../components/StudentNavbar'
import moment from 'moment'

function StudentMessages() {

    const [message, setMessage] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/studentmessagenotification')
            .then(message => {
                setMessage(message.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <StudentNavbar />
            <div className='student-messages'>
                <center><h4>Messages</h4></center>
                <div className='container'>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Message</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        {
                            message.map((s, i) => (

                                <tbody>
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{s.subject}</td>
                                        <td>{s.message}</td>
                                        <td>{moment(s.createdAt).add(0, 'days').format('YYYY-MM-DD')}</td>
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

export default StudentMessages