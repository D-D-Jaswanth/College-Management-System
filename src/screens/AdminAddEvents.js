import React, { useState } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AdminAddEvents() {

    const [events, setEvents] = useState({
        eventname: '',
        organized: '',
        eventdate: '',
        guests: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setEvents({ ...events, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/addevents', events)
        .then(result => {
            alert(result.data)
            navigate('/adminevents')
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <AdminNavbar />
            <div className='add-events' style={{ marginTop: "10px" }}>
                <center><h4>Add Events</h4></center>
                <div className='container'>
                    <form method='POST' onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col">
                                <label htmlFor='eventname'>Event Name</label>
                                <input type="text" onChange={handleChange} name='eventname' id='eventname' class="form-control" placeholder="Event Name" aria-label="eventname" />
                            </div>
                            <div class="col">
                                <label htmlFor='organized'>Organized By</label>
                                <input type="text" onChange={handleChange} name='organized' id='organized' class="form-control" placeholder="Organized By" aria-label="organized" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label htmlFor='eventdate'>Event Date</label>
                                <input type="date" onChange={handleChange} name='eventdate' id='eventdate' class="form-control" placeholder="Event Date" aria-label="eventdate" />
                            </div>
                            <div class="col">
                                <label htmlFor='guests'>Guests</label>
                                <input type="number" onChange={handleChange} name='guests' id='guests' class="form-control" placeholder="No. of Guests" aria-label="guests" />
                            </div>
                        </div>
                        <button className='btn btn-primary'>Add</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminAddEvents