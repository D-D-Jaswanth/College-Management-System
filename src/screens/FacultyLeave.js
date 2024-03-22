import React, { useState } from 'react'
import FacultyNavbar from '../components/FacultyNavbar'
import axios from 'axios'

function FacultyLeave() {

    const [facultyleave, setFacultyLeave] = useState({
        facultyemail: '',
        leavedate: '',
        facultymessage: ''
    })

    const handleChange = (e) => {
        setFacultyLeave({ ...facultyleave, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/facultyleave', facultyleave)
            .then(res => {
                alert('Leave Request Submitted Successfully')
            })
            .catch(err => {
                alert("Something Went Wrong !")
            })
    }

    return (
        <>
            <FacultyNavbar />
            <div className='faculty-leave'>
                <center><h4>Apply For Leave</h4></center>
                <div className='container'>
                    <form>
                        <center><p style={{ color: "red", fontSize: "18px" }}>Note : Please Provide Correct Email Address in the Email Field which was registered by the time Admission</p></center>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email" onChange={handleChange} name='facultyemail' class="form-control" id="exampleFormControlInput1" placeholder="" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Date</label>
                            <input type="date" onChange={handleChange} name='leavedate' class="form-control" id="exampleFormControlInput1" placeholder="" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea name='facultymessage' onChange={handleChange} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button className='btn btn-success' onClick={handleSubmit}>Apply for Leave</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FacultyLeave