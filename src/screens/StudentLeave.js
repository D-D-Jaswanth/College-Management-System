import React, { useState } from 'react'
import StudentNavbar from '../components/StudentNavbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function StudentLeave() {

  const [studentleave, setStudentLeave] = useState({
    studentemail: '',
    leavedate: '',
    studentmessage: ''
  })

  const handleChange = (e) => {
    setStudentLeave({ ...studentleave, [e.target.name]: e.target.value })
  }

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:5000/studentleave', studentleave)
      .then(res => {
        alert('Leave Request Submitted Successfully')
        navigate('/studentleavetrans')
      })
      .catch(err => {
        alert("Something Went Wrong !")
      })
  }

  return (
    <>
      <StudentNavbar />
      <div className='faculty-leave'>
        <center><h4>Apply For Leave</h4></center>
        <div className='container'>
          <form>
            <center><p style={{ color: "red", fontSize: "18px" }}>Note : Please Provide Correct Email Address in the Email Field which was registered by the time Admission</p></center>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email</label>
              <input type="email" onChange={handleChange} name='studentemail' class="form-control" id="exampleFormControlInput1" placeholder="" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Leave Date</label>
              <input type="date" onChange={handleChange} name='leavedate' class="form-control" id="exampleFormControlInput1" placeholder="" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea name='studentmessage' onChange={handleChange} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className='btn btn-success' onClick={handleSubmit}>Apply for Leave</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default StudentLeave