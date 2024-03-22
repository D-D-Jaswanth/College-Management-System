import React, { useState, useEffect } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddSubjectsAssign() {

    const [facultyData, setFacultyData] = useState([])

    const [course, setCourse] = useState([])

    const [subject, setSubject] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/admincourses')
            .then(course => {
                setCourse(course.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    useEffect(() => {
        axios.get('http://localhost:5000/adminfaculty')
            .then(facultyData => {
                setFacultyData(facultyData.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    useEffect(() => {
        axios.get('http://localhost:5000/adminsubjects')
            .then(subject => {
                setSubject(subject.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    const navigate = useNavigate()

    const [subjectassign, setSubjectAssign] = useState({
        Subject: '',
        Course: '',
        FacultyName: ''
    })

    const handleChange = (e) => {
        setSubjectAssign({ ...subjectassign, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/addsubjectassign', subjectassign)
            .then(res => {
                alert(res.data)
                navigate('/assign')
            })
            .catch(err => {
                alert(err)
            })
    }


    return (
        <>
            <AdminNavbar />
            <div className='add-subjects' style={{ marginTop: "10px" }}>
                <center><h4>Add Subject</h4></center>
                <div className='container'>
                    <form method='POST' onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col">
                                <label htmlFor='Subject'>Subject</label>
                                <select onChange={handleChange} name='Subject' class="form-select" aria-label="Default select example">
                                    <option disabled='' selected=''>Select Subject</option>
                                    {
                                        subject.map((s, i) => (
                                            <option value={s.subject}>{s.subject}</option>

                                        ))
                                    }
                                </select>
                            </div>
                            <div class="col">
                                <label htmlFor='Course'>Course</label>
                                <select onChange={handleChange} name='Course' class="form-select" aria-label="Default select example">
                                    <option disabled='' selected=''>Select Course</option>
                                    {
                                        course.map((c, i) => (
                                            <option value={c.coursename}>{c.coursename}</option>

                                        ))
                                    }
                                </select>
                            </div>
                        </div><br />

                        <div class="row">
                            <div class="col">
                                <label htmlFor='FacultyName'>Faculty Name</label>
                                <select onChange={handleChange} name='FacultyName' class="form-select" aria-label="Default select example">
                                    <option disabled='' selected=''>Select Faculty</option>
                                    {
                                        facultyData.map((f, i) => (
                                            <option value={f.firstname}>{f.firstname} {f.lastname}</option>

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

export default AddSubjectsAssign