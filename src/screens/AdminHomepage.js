import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AdminNavbar from '../components/AdminNavbar'

function AdminHomepage() {

  const [student, setStudent] = useState([])

  const [faculty, setFaculty] = useState([])

  const [events, setEvents] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/adminstudents')
      .then(student => {
        setStudent(student.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:5000/adminfaculty')
    .then(faculty => {
      setFaculty(faculty.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:5000/adminevents')
    .then(events => {
      setEvents(events.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <AdminNavbar />
      <div className='admin-homepage' style={{ marginBottom: "10px" }}>

        <div className='container middle'>
          <div className='card-container'>
            <div className='card-box'>
              <span class="material-symbols-outlined icon">person</span>
              <div style={{textAlign: "center"}}>
                <p>{student.length}</p>
                <h5>Students</h5>
              </div>
            </div>
            <div className='card-box'>
              <span class="material-symbols-outlined icon">person</span>
              <div style={{textAlign: "center"}}>
                <p>{faculty.length}</p>
                <h5>Faculty</h5>
              </div>
            </div>
            <div className='card-box'>
              <span class="material-symbols-outlined icon">event</span>
              <div style={{textAlign: "center"}}>
                <p>{events.length}</p>
                <h5>Events</h5>
              </div>
            </div>
          </div>
        </div>

        <div className='container top'>
          <div className='left'>
            <h4>Hello Admin,</h4>
            <h5>Enjoy online Learning</h5>
            <p>Today you have three online lessons let's get started.</p>
          </div>
          <div className='right'>
            <h4>Shedule</h4>
          </div>
        </div>
        {/* <div className='container bottom'>
          <div className='left'>
            <h4>Events</h4>
            <div className='card-container'>
              {
                events.map((e, i) => (
                  <div class="card" style={{ width: "15rem" }}>
                    <div class="card-body">
                      <h5 class='card-title'>{e.eventname}</h5>
                      <h6>Organized By : {e.organized}</h6>
                      <p class="card-text">Date : {moment(e.eventdate).add(0, 'days').format('YYYY-MM-DD')}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div> */}

      </div>
    </>
  )
}

export default AdminHomepage