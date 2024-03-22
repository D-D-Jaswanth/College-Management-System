import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import FacultyNavbar from '../components/FacultyNavbar'

function FacultyAnnouncements() {

    const [faculty, setFaculty] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/facultyannouncements')
        .then(faculty => {
            setFaculty(faculty.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <FacultyNavbar />
            <div className='faculty-announcement'>
                <center><h4>Announcements</h4></center>
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
                            faculty.map((f, i) => (

                                <tbody>
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{f.subject}</td>
                                        <td>{f.message}</td>
                                        <td>{moment(f.createdAt).add(0, 'days').format('YYYY-MM-DD')}</td>
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

export default FacultyAnnouncements