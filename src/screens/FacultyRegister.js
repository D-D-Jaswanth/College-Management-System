import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function FacultyRegister() {

    const [fullname, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const facultyData = {
        fullname,
        username,
        email,
        password
    }

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/facultyregister', facultyData)
        .then(res => {
            alert(res.data)
            navigate('/facultylogin')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <div className='register-container'>
                <div className='register-body'>
                    <form autoComplete='off'>
                        <h1><center>Faculty Register</center></h1>
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Fullname</label>
                            <input type="text" onChange={(e) => setFullName(e.target.value)} class="form-control" id="formGroupExampleInput" placeholder="Enter fullname" />
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">Username</label>
                            <input type="text" onChange={(e) => setUsername(e.target.value)} class="form-control" id="formGroupExampleInput2" placeholder="Enter username" />
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput3" class="form-label">Email</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} class="form-control" id="formGroupExampleInput3" placeholder="Enter email" />
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput4" class="form-label">Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} class="form-control" id="formGroupExampleInput4" placeholder="Enter password" />
                        </div>
                        <button className='btn btn-primary' onClick={handleSubmit}>Register</button>
                        <br />
                        <span>Do you have an account<Link to='/facultylogin' className='link'>Login</Link></span>
                        <br />
                    </form>
                </div>
            </div>
        </>
    )
}

export default FacultyRegister