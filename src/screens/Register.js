import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {

    // const [fullname, setFullName] = useState('')
    // const [username, setUsername] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const [studentData, setstudentData] = useState({
        fullname: '',
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setstudentData({...studentData, [e.target.name]: e.target.value})
    }

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/register', studentData)
        .then(res => {
            alert(res.data)
            navigate('/login')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <div className='register-container'>
                <div className='register-body'>
                    <form autoComplete='off' onSubmit={handleSubmit}>
                        <h1><center>Register</center></h1>
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Fullname</label>
                            <input name='fullname' onChange={handleChange} type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter fullname" />
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">Username</label>
                            <input name='username' onChange={handleChange} type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter username" />
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput3" class="form-label">Email</label>
                            <input name='email' onChange={handleChange} type="email" class="form-control" id="formGroupExampleInput3" placeholder="Enter email" />
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput4" class="form-label">Password</label>
                            <input name='password' onChange={handleChange} type="password" class="form-control" id="formGroupExampleInput4" placeholder="Enter password" />
                        </div>
                        <button className='btn btn-primary'>Register</button>
                        {/* <center>OR</center> */}
                        <br />
                        <span>Do you have an account<Link to='/login' className='link'>Login</Link></span>
                        <br />

                    </form>
                </div>
            </div>
        </>
    )
}

export default Register