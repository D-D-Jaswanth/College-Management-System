import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { store } from '../App'

function Login() {

    const [token, setToken] = useContext(store)

    const [studentData, setstudentData] = useState({
        email: '',
        mobilenumber: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setstudentData({...studentData, [e.target.name]: e.target.value})
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/login', studentData)
        .then(res => {
            setToken(res.data.token)
            alert('Login Successfully')
        })
        .catch(err => {
            console.log(err)
        })
    }

    if(token){
        return navigate('/studenthomepage')
    }

    return (
        <>
            <div className='login-container'>
                <div className='login-body'>
                    <form autoComplete='off'>
                        <h1><center>Login</center></h1>
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Email</label>
                            <input type="email" name='email' onChange={handleChange} class="form-control" id="formGroupExampleInput" placeholder="Enter email" />
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">Mobile Number</label>
                            <input type="number" name='mobilenumber' onChange={handleChange}  class="form-control" id="formGroupExampleInput2" placeholder="Enter Mobile Number" />
                        </div>
                        <button className='btn btn-primary' onClick={handleSubmit} >Login</button>
                        <br />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login