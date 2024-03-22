import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AdminNavbar from '../components/AdminNavbar'
import moment from 'moment'

function AdminMessages() {
    const [adminMessage, setAdminMessage] = useState([])

    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/adminmessages')
            .then(adminMessage => {
                setAdminMessage(adminMessage.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/adminmessages/' + id)
            .then(res => {
                alert('Message Deleted')
                window.location.reload()
            })
            .catch(err => {
                alert('Something Went Wrong !')
            })
    }

    return (
        <>
            <AdminNavbar />
            <div className='admin-messages'>
                <center><h4>Messages</h4></center>
                <div className='container'>
                    <Link className='btn btn-primary link' to='/adminsendmessage'>Send Message</Link>
                    <input class="form-control" onChange={(e) => setSearch(e.target.value)} list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Email</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Message</th>
                                <th scope="col">Date</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            adminMessage.filter(a => {
                                return search.toLowerCase() === ''
                                ? a
                                : a.createdAt.toLowerCase().includes(search)
                            }).map((a, i) => (

                                <tbody>
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{a.email}</td>
                                        <td>{a.subject}</td>
                                        <td>{a.message}</td>
                                        <td>{moment(a.createdAt).add(0, 'days').format('YYYY-MM-DD')}</td>
                                        <td>
                                            <button className='btn btn-danger delete-btn' onClick={(e) => { handleDelete(a._id) }}>Delete</button>
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

export default AdminMessages