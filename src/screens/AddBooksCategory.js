import React, { useState } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddBooksCategory() {

    const [booksCategory, setBooksCategory] = useState({
        categoryname: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setBooksCategory({...booksCategory, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/addbookscategory', booksCategory)
        .then(res => {
            alert(res.data)
            navigate('/adminlibrarybookscategory')
        })
        .catch(err => {
            alert(err)
        })
    }

    return (
        <>
            <AdminNavbar />
            <div className='add-books' style={{ marginTop: "10px" }}>
                <center><h4>Add Books Category</h4></center>
                <div className='container'>
                    <form method='POST' onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col">
                                <label htmlFor='categoryname'>Category Name</label>
                                <input type="text" name='categoryname' onChange={handleChange} id='categoryname' class="form-control" placeholder="Category Name" aria-label="categoryname" />
                            </div>
                        </div>
                        <button className='btn btn-primary'>Add</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddBooksCategory