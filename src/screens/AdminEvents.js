import React, { useEffect, useState } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

function AdminEvents() {

    const [events, setEvents] = useState([])

    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/adminevents')
            .then(events => {
                setEvents(events.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/adminevents/' + id)
            .then(res => {
                alert('Event Deleted')
                window.location.reload()
            })
            .catch(err => {
                alert('Something Went Wrong !')
            })
    }

    return (
        <>
            <AdminNavbar />

            <div className='admin-events' style={{ marginTop: "10px" }}>
                <center><h4>Events</h4></center>
                <div className="container">
                    <Link to='/addevents' className='events-link btn btn-primary'>Add Events</Link>
                    <input class="form-control" onChange={(e) => setSearch(e.target.value)} list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Event Name</th>
                                <th scope="col">Organized By</th>
                                <th scope="col">Date</th>
                                <th scope="col">Guests</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            events.filter(e => {
                                return search.toLowerCase() === ''
                                ? e
                                : e.eventname.toLowerCase().includes(search)
                            }).map((e, i) => (
                                <tbody>
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{e.eventname}</td>
                                        <td>{e.organized}</td>
                                        <td>{moment(e.eventdate).add(0, 'days').format('YYYY-MM-DD')}</td>
                                        <td>{e.guests}</td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => { handleDelete(e._id) }}>Delete</button>
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

export default AdminEvents