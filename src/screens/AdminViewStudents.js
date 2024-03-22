import React, { useState, useEffect } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

function AdminViewStudents() {

    const { id } = useParams()

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

    useEffect(() => {
        axios.get('http://localhost:5000/adminviewstudents/' + id)
            .then(studentData => {
                console.log(studentData.data)
                setStudentData(studentData.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <AdminNavbar />

            <div className='admin-view-students'>
                <br />
                <center><h4>Add Students</h4></center>
                <div className='container' style={{ marginBottom: "20px" }}>
                    <form autoComplete='off'>
                        <h5>Personal Details</h5>
                        <hr />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='firstname'>First Name</label>
                                <input type="text" value={studentData.firstname} name='firstname' id='firstname' class="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div class="col">
                                <label htmlFor='lastname'>Last Name</label>
                                <input type="text" value={studentData.lastname} name='lastname' id='lastname' class="form-control" placeholder="Last name" aria-label="Last name" />
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='dob'>Date of Birth</label>
                                <input type="text" value={moment(studentData.dob).add(0, 'days').format('YYYY-MM-DD')} name='dob' id='dob' class="form-control" placeholder="" aria-label="dob" />
                            </div>
                            <div class="col">
                                <label htmlFor='gender'>Gender</label>
                                <input type="text" value={studentData.gender} name='gender' id='gender' class="form-control" placeholder="Gender" aria-label="gender" />
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='mobilenumber'>Mobile Number</label>
                                <input type="number" value={studentData.mobilenumber} name='mobilenumber' id='mobilenumber' class="form-control" placeholder="Mobile Number" aria-label="mobilenumber" />
                            </div>
                            <div class="col">
                                <label htmlFor='email'>Email</label>
                                <input type="email" value={studentData.email} name='email' id='email' class="form-control" placeholder="Email" aria-label="email" />
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='coursename'>Course</label>
                                <input type="text" value={studentData.coursename} name='coursename' id='coursename' class="form-control" placeholder="Course" aria-label="coursename" />
                            </div>
                        </div><br />
                        <h5>Communication Details</h5>
                        <hr />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='address'>Address</label>
                                <input type="text" value={studentData.address} name='address' id='address' class="form-control" placeholder="Address" aria-label="address" />
                            </div>
                            <div class="col">
                                <label htmlFor='city'>City</label>
                                <input type="text" value={studentData.city} name='city' id='city' class="form-control" placeholder="City" aria-label="city" />
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='state'>State</label>
                                <input type="text" value={studentData.state} name='state' id='state' class="form-control" placeholder="State" aria-label="state" />
                            </div>
                            <div class="col">
                                <label htmlFor='pincode'>Pincode</label>
                                <input type="number" value={studentData.pincode} name='pincode' id='pincode' class="form-control" placeholder="Pincode" aria-label="pincode" />
                            </div>
                        </div><br />
                        <h5>Family Details</h5>
                        <hr />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='fathername'>Father Name</label>
                                <input type="text" value={studentData.fathername} name='fathername' id='fathername' class="form-control" placeholder="Father Name" aria-label="fathername" />
                            </div>
                            <div class="col">
                                <label htmlFor='occupation'>Occupation</label>
                                <input type="text" value={studentData.fatheroccupation} name='fatheroccupation' id='occupation' class="form-control" placeholder="Occupation" aria-label="occupation" />
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='mothername'>Mother Name</label>
                                <input type="text" value={studentData.mothername} name='mothername' id='mothername' class="form-control" placeholder="Mother Name" aria-label="mothername" />
                            </div>
                            <div class="col">
                                <label htmlFor='occupation'>Occupation</label>
                                <input type="text" value={studentData.motheroccupation} name='motheroccupation' id='occupation' class="form-control" placeholder="Occupation" aria-label="occupation" />
                            </div>
                        </div>
                        <br />
                        <button className='btn btn-primary'>Update</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminViewStudents