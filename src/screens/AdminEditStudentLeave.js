import React, { useState, useEffect } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function AdminEditStudentLeave() {

    const { id } = useParams()

    const [studentleave, setStudentLeave] = useState({
        status: ''
    })

    useEffect(() => {
        axios.get('http://localhost:5000/admineditstudentleave/' + id)
            .then(studentleave => {
                setStudentLeave(studentleave.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const navigate = useNavigate()

    const [changestatus, setChangeStatus] = useState(["Pending", "Rejected", "Approved"])

    const handleChange = (e) => {
        setStudentLeave({ ...studentleave, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put('http://localhost:5000/editstudentleave/' + id, studentleave)
            .then(res => {
                alert('Leave Updated Successfully')
                navigate('/adminstudentleavetrans')
            })
            .catch(err => {
                alert("Something Went Wrong !")
            })
    }

    return (
        <>
            <AdminNavbar />
            <div className='faculty-leave'>
                <center><h4>Apply For Leave</h4></center>
                <div className='container'>
                    <form>
                    <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Date</label>
                            <input type="text" value={moment(studentleave.leavedate).add(0, 'days').format('YYYY-MM-DD')} name='leavedate' class="form-control" id="exampleFormControlInput1" placeholder="" readOnly />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea name='facultymessage' value={studentleave.studentmessage} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <select onChange={handleChange} class="form-select" aria-label="Default select example" name='status'>
                            <option selected disabled>Update Action</option>
                            {
                                changestatus.map((s, i) => (
                                    <option value={s} key={i}>{s}</option>
                                ))
                            }
                        </select><br />
                        <button className='btn btn-success' onClick={handleSubmit}>Apply for Leave</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminEditStudentLeave