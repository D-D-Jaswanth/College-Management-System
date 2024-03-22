import React, { useState, useEffect } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { Link } from 'react-router-dom'
import axios from 'axios'

function AdminBooksCategory() {

    const [booksCategory, setBooksCategory] = useState([])

    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/adminlibrarybookscategory')
        .then(booksCategory => {
            setBooksCategory(booksCategory.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/adminlibrarybookscategory/' + id)
            .then(res => {
                alert('Category Deleted')
                window.location.reload()
            })
            .catch(err => {
                alert('Something Went Wrong !')
            })
    }

    return (
        <>
            <AdminNavbar />
            <div className='admin-books-category' style={{ marginTop: "10px" }}>
                <center><h4>Books Category</h4></center>
                <div className="container">
                    <Link to='/addbookscategory' className='course-link btn btn-primary'>Add Books Category</Link>
                    <input class="form-control" onChange={(e) => setSearch(e.target.value)} list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Category</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            booksCategory.filter(c => {
                                return search.toLowerCase() === ''
                                ? c
                                : c.categoryname.toLowerCase().includes(search)
                            }).map((c, i) => (

                                <tbody>
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{c.categoryname}</td>
                                        <td>
                                            <button className='btn btn-danger' onClick={(e) => { handleDelete(c._id) }}>Delete</button>
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

export default AdminBooksCategory