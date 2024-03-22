import React, { useState } from 'react'
import axios from 'axios'
import AdminNavbar from '../components/AdminNavbar'
import { useNavigate } from 'react-router-dom'

function AdminSendMessages() {
    const [adminMessage, setAdminMessage] = useState({
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        setAdminMessage({ ...adminMessage, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(adminMessage)
        await axios.post('http://localhost:5000/adminsendmessage', adminMessage)
            .then(res => {
                alert(res.data)
                navigate('/adminmessages')
            })
            .catch(err => {
                alert('Error Sending Message', err)
            })
    }
    return (
        <>
            <AdminNavbar />
            <div className='admin-messages'>
                <center><h4>Send Messages</h4></center>
                <div className='container'>
                    <form autoComplete='off' onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" onChange={handleChange} name='email' class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput2" class="form-label">Subject</label>
                            <input type="text" onChange={handleChange} name='subject' class="form-control" id="exampleFormControlInput2" placeholder="Subject" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea name='message' onChange={handleChange} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button className='btn btn-danger'>Send Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminSendMessages