import React, { useState, useEffect } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

function AdminLibraryBooks() {

    const [books, setBooks] = useState([])

    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/adminlibrarybooks')
        .then(books => {
            setBooks(books.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/adminlibrarybooks/' + id)
            .then(res => {
                alert('Book Deleted')
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
                    <Link to='/addlibrarybooks' className='course-link btn btn-primary'>Add Library Books</Link>
                    <input class="form-control" onChange={(e) => setSearch(e.target.value)} list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">ISBN Number</th>
                                <th scope="col">Title</th>
                                <th scope="col">Category</th>
                                <th scope="col">Author</th>
                                <th scope="col">Publisher</th>
                                <th scope="col">Publish Date</th>
                                <th scope="col">Available Books</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            books.filter(b => {
                                return search.toLowerCase() === ''
                                    ? b
                                    : b.title.toLowerCase().includes(search)
                            }).map((b, i) => (

                                <tbody>
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{b.isbnnumber}</td>
                                        <td>{b.title}</td>
                                        <td>{b.category}</td>
                                        <td>{b.author}</td>
                                        <td>{b.publisher}</td>
                                        <td>{moment(b.publishdate).add(0, 'days').format('YYYY-MM-DD')}</td>
                                        <td>{b.availablebooks}</td>
                                        <td>{b.status}</td>
                                        <td>
                                            <button className='btn btn-danger' onClick={(e) => { handleDelete(b._id) }}>Delete</button>
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

export default AdminLibraryBooks