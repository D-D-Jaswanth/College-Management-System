import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import FacultyNavbar from '../components/FacultyNavbar'

function FacultyViewEvents() {
    const [events, setEvents] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:5000/facultyviewsevents')
        .then(events => {
            setEvents(events.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <FacultyNavbar />
            <div className='faculty-events'>
                <center><h4>Events</h4></center>
                <div className='container bottom'>
                    <div className='left'>
                        <div className='card-container'>
                            {
                                events.map((e, i) => (
                                    <div class="card" style={{ width: "15rem" }}>
                                        <div class="card-body">
                                            <h5 class='card-title'>{e.eventname}</h5>
                                            <h6>Organized By : {e.organized}</h6>
                                            <p class="card-text">Date : {moment(e.eventdate).add(0, 'days').format('YYYY-MM-DD')}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FacultyViewEvents