import React, { useContext, useState, useEffect } from 'react'
import StudentNavbar from '../components/StudentNavbar'
import { store } from '../App'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function StudentHomepage() {

  const [token, setToken] = useContext(store)
  const [studentData, setStudentData] = useState({
    firstname: '',
    lastname: '',
    dob: '',
    gender: '',
    mobilenumber: '',
    email: '',
    coursename: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    fathername: '',
    fatheroccupation: '',
    mothername: '',
    motheroccupation: ''
})

  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:5000/studenthomepage', {
      headers: {
        'x-token': token
      }
    })
      .then(res => {
        setStudentData(res.data)
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
      <StudentNavbar />
      <div style={{ marginBottom: "10px" }}>

        <div className='container top'>
          <div className='left'>
            {
              studentData &&
              <h4>Welcome User, {studentData.firstname} {studentData.lastname}</h4>
            }
            <h5>Enjoy online Learning</h5>
            <p>Today you have three online lessons let's get started.</p>
          </div>
          <div className='right'>
            <h4>Shedule</h4>
          </div>
        </div>
        <div className='container middle'>
          <div className='left'>
            <h4>Performance</h4>
            <h5>Enjoy online Learning</h5>
            <p>Today you have three online lessons let's get started.</p>
          </div>
          <div className='right'>
            <h4>Shedule</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentHomepage