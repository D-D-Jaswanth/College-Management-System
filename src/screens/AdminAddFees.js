import React, { useState, useEffect } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AdminAddFees() {

  const [fees, setFees] = useState({
    coursename: '',
    fee: ''
  })

  const [course, setCourse] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/admincourses')
      .then(course => {
        setCourse(course.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFees({ ...fees, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/admin-add-fees', fees)
      .then(res => {
        alert(res.data)
        navigate('/adminfees')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <AdminNavbar />
      <div className='add-fees' style={{ marginTop: "10px" }}>
        <center><h4>Add Fees</h4></center>
        <div className='container'>
          <form method='POST' onSubmit={handleSubmit}>
            <div class="row">
              <div class="col">
                <label htmlFor='coursename'>Course Name</label>
                <select onChange={handleChange} name='coursename' class="form-select" aria-label="Default select example">
                  <option disabled='' selected=''>Select Course</option>
                  {
                    course.map((c, i) => (
                      <option value={c.coursename}>{c.coursename}</option>

                    ))
                  }
                </select>
              </div>
              <div class="col">
                <label htmlFor='fee'>Fee Details</label>
                <input type="number" name='fee' id='fee' onChange={handleChange} class="form-control" placeholder="Fee" aria-label="fee" />
              </div>
            </div>
            <button className='btn btn-primary'>Add</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AdminAddFees