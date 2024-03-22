import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AdminNavbar from '../components/AdminNavbar'
import { useNavigate } from 'react-router-dom'

function AddLibraryBooks() {

    const [books, setBooks] = useState({
        isbnnumber: '',
        title: '',
        category: '',
        author: '',
        publisher: '',
        publishdate: '',
        availablebooks: '',
        status: ''
    })

    const navigate = useNavigate()

    const [booksCategory, setBooksCategory] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/adminlibrarybookscategory')
            .then(booksCategory => {
                setBooksCategory(booksCategory.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleChange = (e) => {
        setBooks({ ...books, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => { 
        e.preventDefault()
        await axios.post('http://localhost:5000/addlibrarybooks', books)
        .then(res => {
            alert(res.data)
            navigate('/adminlibrarybooks')
        })
        .catch(err => {
            alert(err)
        })
    }
    return (
        <>
            <AdminNavbar />
            <div className='add-books' style={{ marginTop: "10px" }}>
                <center><h4>Add Books</h4></center>
                <div className='container'>
                    <form method='POST' autoComplete='off' onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col">
                                <label htmlFor='isbnnumber'>ISBN Number</label>
                                <input type="text" onChange={handleChange} name='isbnnumber' id='isbnnumber' class="form-control" placeholder="ISBN Number" aria-label="isbnnumber" />
                            </div>
                            <div class="col">
                                <label htmlFor='title'>Title</label>
                                <input type="text" onChange={handleChange} name='title' id='title' class="form-control" placeholder="Title" aria-label="title" />
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='category'>Category</label>
                                <select onChange={handleChange} name='category' class="form-select" aria-label="Default select example">
                                    <option disabled='' selected=''>Select Category</option>
                                    {
                                        booksCategory.map((c, i) => (
                                            <option value={c.categoryname}>{c.categoryname}</option>

                                        ))
                                    }
                                </select>
                            </div>
                            <div class="col">
                                <label htmlFor='author'>Author</label>
                                <input type="text" onChange={handleChange} name='author' id='author' class="form-control" placeholder="Author" aria-label="author" />
                            </div>
                        </div> <br />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='publisher'>Publisher</label>
                                <input type="text" onChange={handleChange} name='publisher' id='publisher' class="form-control" placeholder="Publisher" aria-label="publisher" />
                            </div>
                            <div class="col">
                                <label htmlFor='publishdate'>Publish Date</label>
                                <input type="date" onChange={handleChange} name='publishdate' id='publishdate' class="form-control" placeholder="Publish date" aria-label="publishdate" />
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col">
                                <label htmlFor='availablebooks'>Availability</label>
                                <input type="number" onChange={handleChange} name='availablebooks' id='availablebooks' class="form-control" placeholder="Available books" aria-label="availablebooks" />
                            </div>
                            <div class="col">
                                <label htmlFor='status'>Status</label>
                                <select onChange={handleChange} name='status' class="form-select" aria-label="Default select example">
                                    <option disabled='' selected=''>Select Category</option>
                                    <option value='Available'>Available</option>
                                    <option value='Not Available'>Not Available</option>
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

export default AddLibraryBooks