import React, { useState, useEffect } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { Link } from 'react-router-dom'
import axios from 'axios'

function AdminFees() {

    const [fees, setFees] = useState([])

    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/adminfees')
            .then(fees => {
                setFees(fees.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/adminfees/' + id)
            .then(res => {
                alert('Fee Deleted')
                window.location.reload()
            })
            .catch(err => {
                alert('Somwthing Went Wrong !')
            })
    }

    return (
        <>
            <AdminNavbar />
            <div className='admin-fees-container' style={{ marginTop: "10px" }}>
                <center><h4>Fees</h4></center>
                <div className='container'>
                    <Link to='/admin-add-fees' className='link btn btn-primary'>Add Fees</Link>
                    <input class="form-control" onChange={(e) => setSearch(e.target.value)} list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Course Name</th>
                                <th scope="col">Fees</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            fees.filter(f => {
                                return search.toLowerCase() === ''
                                ? f
                                : f.coursename.toLowerCase().includes(search)
                            }).map((f, i) => (
                                <tbody>
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{f.coursename}</td>
                                        <td>{f.fee}</td>
                                        <td style={{ display: "flex", gap: "10px" }}>
                                            <button className='btn btn-primary'>View</button>
                                            <button className='btn btn-danger' onClick={(e) => { handleDelete(f._id) }}>Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            ))
                        }
                    </table>
                </div>
            </div>
        </>
    )
}

export default AdminFees