import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AdminLogin() {

    const [adminData, setAdminData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setAdminData({...adminData, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/adminlogin', adminData)
        .then(()  => {
            alert('Login Successfully')
            navigate('/adminhomepage')
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <>
            <div className='login-container'>
                <div className='login-body'>
                    <form autoComplete='off'>
                        <h1><center>Admin Login</center></h1>
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Email</label>
                            <input type="email" onChange={handleChange} name='email' class="form-control" id="formGroupExampleInput" placeholder="Enter email" />
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">Password</label>
                            <input type="password" onChange={handleChange}  name='password' class="form-control" id="formGroupExampleInput2" placeholder="Enter Password" />
                        </div>
                        <button onClick={handleSubmit} className='btn btn-primary'>Login</button>
                        <br />
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminLogin