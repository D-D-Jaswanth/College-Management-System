import React, { useState } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddCourses() {

    const [course, setCourse] = useState({
        coursename: '',
        intake: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/addcourse', course)
            .then(res => {
                alert(res.data)
                navigate('/admincourses')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <AdminNavbar />
            <div className='add-courses' style={{ marginTop: "10px" }}>
                <center><h4>Add Course</h4></center>
                <div className='container'>
                    <form method='POST' onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col">
                                <label htmlFor='coursename'>Course Name</label>
                                <input type="text" onChange={handleChange} name='coursename' id='coursename' class="form-control" placeholder="Course Name" aria-label="coursename" />
                            </div>
                            <div class="col">
                                <label htmlFor='intake'>Intake</label>
                                <input type="number" onChange={handleChange} name='intake' id='intake' class="form-control" placeholder="Intake" aria-label="intake" />
                            </div>
                        </div>
                        <button className='btn btn-primary'>Add</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddCourses