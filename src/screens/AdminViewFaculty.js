import React, { useState, useEffect } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

function AdminViewFaculty() {

    const { id } = useParams()

    const [facultyData, setFacultyData] = useState({
        firstname: '',
        lastname: '',
        dob: '',
        gender: '',
        mobilenumber: '',
        email: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        husbandname: '',
        husbandoccupation: '',
        educational: '',
        subject: '',
        experience: '',
        previouscollege: ''
    })

    useEffect(() => {
        axios.get('http://localhost:5000/adminviewfaculty/' + id)
            .then(facultyData => {
                // console.log(facultyData.data)
                setFacultyData(facultyData.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <AdminNavbar />
            <div className='admin-add-faculty'>
                <br />
                <center><h4>Add Faculty</h4></center>
                <div className='container' style={{ marginBottom: "20px" }}>
                    <form autoComplete='off'>
                        <h5>Personal Details</h5>
                        <hr />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='firstname'>First Name</label>
                                <input type="text" value={facultyData.firstname} name='firstname' id='firstname' class="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div class="col">
                                <label htmlFor='lastname'>Last Name</label>
                                <input type="text" value={facultyData.lastname} name='lastname' id='lastname' class="form-control" placeholder="Last name" aria-label="Last name" />
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='dob'>Date of Birth</label>
                                <input type="text" value={moment(facultyData.dob).add(0, 'days').format('YYYY-MM-DD')} name='dob' id='dob' class="form-control" placeholder="" aria-label="dob" />
                            </div>
                            <div class="col">
                                <label htmlFor='gender'>Gender</label>
                                <input type="text" value={facultyData.gender} name='gender' id='gender' class="form-control" placeholder="Gender" aria-label="gender" />
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='mobilenumber'>Mobile Number</label>
                                <input type="number" value={facultyData.mobilenumber} name='mobilenumber' id='mobilenumber' class="form-control" placeholder="Mobile Number" aria-label="mobilenumber" />
                            </div>
                            <div class="col">
                                <label htmlFor='email'>Email</label>
                                <input type="email" value={facultyData.email} name='email' id='email' class="form-control" placeholder="Email" aria-label="email" />
                            </div>
                        </div><br />
                        <h5>Communication Details</h5>
                        <hr />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='address'>Address</label>
                                <input type="text" value={facultyData.address} name='address' id='address' class="form-control" placeholder="Address" aria-label="address" />
                            </div>
                            <div class="col">
                                <label htmlFor='city'>City</label>
                                <input type="text" value={facultyData.city} name='city' id='city' class="form-control" placeholder="City" aria-label="city" />
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='state'>State</label>
                                <input type="text" value={facultyData.state} name='state' id='state' class="form-control" placeholder="State" aria-label="state" />
                            </div>
                            <div class="col">
                                <label htmlFor='pincode'>Pincode</label>
                                <input type="number" value={facultyData.pincode} name='pincode' id='pincode' class="form-control" placeholder="Pincode" aria-label="pincode" />
                            </div>
                        </div><br />
                        <h5>Family Details</h5>
                        <hr />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='husbandname'>Husband Name / Father Name</label>
                                <input type="text" value={facultyData.husbandname} name='husbandname' id='husbandname' class="form-control" placeholder="Husband/ Father Name" aria-label="husbandname" />
                            </div>
                            <div class="col">
                                <label htmlFor='occupation'>Occupation</label>
                                <input type="text" value={facultyData.husbandoccupation} name='husbandoccupation' id='occupation' class="form-control" placeholder="Occupation" aria-label="occupation" />
                            </div>
                        </div><br />
                        <h5>Educational Details</h5>
                        <hr />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='educationalbackground'>Educational Qualification</label>
                                <input type="text" value={facultyData.educational} name='educational' id='educationalbackground' class="form-control" placeholder="Educational Background" aria-label="educationalbackground" />
                            </div>
                            <div class="col">
                                <label htmlFor='subject'>Subject</label>
                                <input type="text" value={facultyData.subject} name='subject' id='subject' class="form-control" placeholder="Subject" aria-label="subject" />
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='experience'>Experience</label>
                                <input type="number" value={facultyData.experience} name='experience' id='experience' class="form-control" placeholder="Experience" aria-label="experience" />
                            </div>
                            <div class="col">
                                <label htmlFor='previoscollege'>Previous College Name</label>
                                <input type="text" value={facultyData.previouscollege} name='previouscollege' id='previoscollege' class="form-control" placeholder="Previous College Name" aria-label="previoscollege" />
                            </div>
                        </div><br />
                        <button className='btn btn-primary'>Update</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminViewFaculty