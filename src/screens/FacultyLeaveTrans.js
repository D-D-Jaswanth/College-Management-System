import React, { useState, useEffect } from 'react'
import FacultyNavbar from '../components/FacultyNavbar'
import axios from 'axios'
import moment from 'moment'

function FacultyLeaveTrans() {

    const [facultyleave, setFacultyLeave] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/facultyleavetrans')
            .then(facultyleave => {
                setFacultyLeave(facultyleave.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <FacultyNavbar />
            <div className='faculty-leave'>

                <center><h4>Leave Transaction</h4></center>

                <div className='container'>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date</th>
                                <th scope="col">Message</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                facultyleave.map((l, i) => (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{moment(l.leavedate).add(0, 'days').format('YYYY-MM-DD')}</td>
                                        <td>{l.facultymessage}</td>
                                        <td>{l.status}</td>
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

export default FacultyLeaveTrans