import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { store } from '../App'

function FacultyLogin() {

    const [token, setToken] = useContext(store)

    const [facultyData, setFacultyData] = useState({
        email: '',
        mobilenumber: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFacultyData({ ...facultyData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/facultylogin', facultyData)
            .then(res => {
                setToken(res.data.token)
                alert('Login Successfully')
            })
            .catch(err => {
                console.log(err)
            })
    }

    if(token){
        return navigate('/facultyhomepage')
    }

    return (
        <>
            <div className='login-container'>
                <div className='login-body'>
                    <form autoComplete='off'>
                        <h1><center>Faculty Login</center></h1>
                        <div class='mb-3'>
                            <label for="formGroupExampleInput" class="form-label">Email</label>
                            <input type="email" name='email' onChange={handleChange} class="form-control" id="formGroupExampleInput" placeholder="Enter email" />
                        </div>
                        <div class='mb-3'>
                            <label for="formGroupExampleInput1" class="form-label">Mobile Number</label>
                            <input type="number" name='mobilenumber' onChange={handleChange} class="form-control" id="formGroupExampleInput1" placeholder="Enter Mobile Number" />
                        </div>
                        <button className='btn btn-primary' onClick={handleSubmit}>Login</button>
                        <br />
                    </form>

                </div>
            </div>
        </>
    )
}

export default FacultyLogin