import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

function AdminEditFacultyLeave() {

    const { id } = useParams()

    const [facultyleave, setFacultyLeave] = useState({
        status: ''
    })

    const [changestatus, setChangeStatus] = useState(["Pending", "Rejected", "Approved"])

    useEffect(() => {
        axios.get('http://localhost:5000/admineditfacultyleave/' + id)
            .then(facultyleave => {
                setFacultyLeave(facultyleave.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFacultyLeave({ ...facultyleave, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put('http://localhost:5000/editfacultyleave/' + id, facultyleave)
            .then(res => {
                alert('Leave Updated Successfully')
                navigate('/adminfacultyleavetrans')
            })
            .catch(err => {
                alert("Something Went Wrong !")
            })
    }

    return (
        <>
            <AdminNavbar />
            <div className='faculty-leave'>
                <center><h4>Update Leave</h4></center>
                <div className='container'>
                    <form>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Date</label>
                            <input type="text" value={moment(facultyleave.leavedate).add(0, 'days').format('YYYY-MM-DD')} name='leavedate' class="form-control" id="exampleFormControlInput1" placeholder="" readOnly />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea name='facultymessage' value={facultyleave.facultymessage} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <select onChange={handleChange} class="form-select" aria-label="Default select example" name='status'>
                            <option selected disabled>Update Action</option>
                            {
                                changestatus.map((s, i) => (
                                    <option value={s} key={i}>{s}</option>
                                ))
                            }
                        </select><br />
                        <button onClick={handleSubmit} className='btn btn-success' >Apply for Leave</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminEditFacultyLeave