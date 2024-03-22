import React, { useState, useEffect, useContext } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import axios from 'axios'
import { store } from '../App'
import { useNavigate } from 'react-router-dom'

function AdminProfile() {

    const [token, setToken] = useContext(store)
    const [adminData, setAdminData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:5000/adminprofile', {
            headers: {
                'x-token': token
            }
        })
            .then(res => {
                setAdminData(res)
                console.log(res.data)
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
            <AdminNavbar />
            <div className='profile'>
                <br />
                <center><h4>Profile</h4></center>
                <div className='container'>
                    <div class="row">
                        <div class="col">
                            <label htmlFor='email'>Email</label>
                            <input type="email" value={adminData.email} name='email' id='email' class="form-control" placeholder="Email" aria-label="Email" />
                        </div>
                        <div class="col">
                            <label htmlFor='password'>Password</label>
                            <input type="password" value={adminData.password} name='password' id='password' class="form-control" placeholder="Password" aria-label="Password" />
                        </div>
                    </div><br />
                </div>

            </div>
        </>
    )
}

export default AdminProfile