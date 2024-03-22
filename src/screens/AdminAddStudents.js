import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AdminNavbar from '../components/AdminNavbar'
import { useNavigate } from 'react-router-dom'

function AdminAddStudents() {

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

    const [course, setCourse] = useState([])

    const navigate = useNavigate()

    const handleChange = (e) => {
        setStudentData({ ...studentData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/admin-add-students', studentData)
            .then(res => {
                alert(res.data)
                navigate('/adminstudents')
            })
            .catch(err => {
                console.log(err)
            })
    }

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

            <div className='admin-add-students'>
                <br />
                <center><h4>Add Students</h4></center>
                <div className='container' style={{ marginBottom: "20px" }}>
                    <form autoComplete='off' onSubmit={handleSubmit}>
                        <h5>Personal Details</h5>
                        <hr />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='firstname'>First Name</label>
                                <input type="text" onChange={handleChange} name='firstname' id='firstname' class="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div class="col">
                                <label htmlFor='lastname'>Last Name</label>
                                <input type="text" onChange={handleChange} name='lastname' id='lastname' class="form-control" placeholder="Last name" aria-label="Last name" />
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='dob'>Date of Birth</label>
                                <input type="date" onChange={handleChange} name='dob' id='dob' class="form-control" placeholder="" aria-label="dob" />
                            </div>
                            <div class="col">
                                <label htmlFor='gender'>Gender</label>
                                <input type="text" onChange={handleChange} name='gender' id='gender' class="form-control" placeholder="Gender" aria-label="gender" />
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='mobilenumber'>Mobile Number</label>
                                <input type="number" onChange={handleChange} name='mobilenumber' id='mobilenumber' class="form-control" placeholder="Mobile Number" aria-label="mobilenumber" />
                            </div>
                            <div class="col">
                                <label htmlFor='email'>Email</label>
                                <input type="email" onChange={handleChange} name='email' id='email' class="form-control" placeholder="Email" aria-label="email" />
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='coursename'>Course</label>
                                <select onChange={handleChange} name='course' class="form-select" aria-label="Default select example">
                                    <option disabled='' selected=''>Select Course</option>
                                    {
                                        course.map((c, i) => (
                                            <option value={c.coursename}>{c.coursename}</option>

                                        ))
                                    }
                                </select>
                            </div>
                        </div><br />
                        <h5>Communication Details</h5>
                        <hr />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='address'>Address</label>
                                <input type="text" onChange={handleChange} name='address' id='address' class="form-control" placeholder="Address" aria-label="address" />
                            </div>
                            <div class="col">
                                <label htmlFor='city'>City</label>
                                <input type="text" onChange={handleChange} name='city' id='city' class="form-control" placeholder="City" aria-label="city" />
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='state'>State</label>
                                <input type="text" onChange={handleChange} name='state' id='state' class="form-control" placeholder="State" aria-label="state" />
                            </div>
                            <div class="col">
                                <label htmlFor='pincode'>Pincode</label>
                                <input type="number" onChange={handleChange} name='pincode' id='pincode' class="form-control" placeholder="Pincode" aria-label="pincode" />
                            </div>
                        </div><br />
                        <h5>Family Details</h5>
                        <hr />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='fathername'>Father Name</label>
                                <input type="text" onChange={handleChange} name='fathername' id='fathername' class="form-control" placeholder="Father Name" aria-label="fathername" />
                            </div>
                            <div class="col">
                                <label htmlFor='occupation'>Occupation</label>
                                <input type="text" onChange={handleChange} name='fatheroccupation' id='occupation' class="form-control" placeholder="Occupation" aria-label="occupation" />
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='mothername'>Mother Name</label>
                                <input type="text" onChange={handleChange} name='mothername' id='mothername' class="form-control" placeholder="Mother Name" aria-label="mothername" />
                            </div>
                            <div class="col">
                                <label htmlFor='occupation'>Occupation</label>
                                <input type="text" onChange={handleChange} name='motheroccupation' id='occupation' class="form-control" placeholder="Occupation" aria-label="occupation" />
                            </div>
                        </div>
                        <br />
                        <button className='btn btn-primary'>Submit</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default AdminAddStudents