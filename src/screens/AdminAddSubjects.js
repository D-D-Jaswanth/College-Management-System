import React, { useState, useEffect } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AdminAddSubjects() {

    const [subject, setSubject] = useState({
        subject: '',
        course: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setSubject({ ...subject, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(subject)
        await axios.post('http://localhost:5000/addsubjects', subject)
        .then(res => {
            alert(res.data)
            navigate('/adminsubjects')
        })
        .catch(err => {
            console.log(err)
        })
    }


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

    return (
        <>
            <AdminNavbar />
            <div className='add-subjects' style={{ marginTop: "10px" }}>
                <center><h4>Add Subject</h4></center>
                <div className='container'>
                    <form method='POST' onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col">
                                <label htmlFor='subject'>Subject</label>
                                <input type="text" onChange={handleChange} name='subject' id='subject' class="form-control" placeholder="Subject Name" aria-label="subject" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label htmlFor='course'>Course</label>
                                <select onChange={handleChange} name='course' class="form-select" aria-label="Default select example">
                                    <option disabled='' selected=''>Select Course</option>
                                    {
                                        course.map((c, i) => (
                                            <option value={c.coursename}>{c.coursename}</option>

                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <button className='btn btn-primary'>Add</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminAddSubjects