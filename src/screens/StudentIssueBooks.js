import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import StudentNavbar from '../components/StudentNavbar'
import moment from 'moment'
import { store } from '../App'

function StudentIssueBooks() {

    const [books, setBooks] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/studentissuebooks')
            .then(books => {
                setBooks(books.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <StudentNavbar />
            <div className='student-issue-books' style={{ marginTop: "10px" }}>
                <center><h4>All Books</h4></center>
                <div className="container">
                    <input class="form-control" onChange={(e) => setSearch(e.target.value)} list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
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
                                        <td>{b.title}</td>
                                        <td>{b.category}</td>
                                        <td>{b.author}</td>
                                        <td>{b.publisher}</td>
                                        <td>{moment(b.publishdate).add(0, 'days').format('YYYY-MM-DD')}</td>
                                        <td>{b.availablebooks}</td>
                                        <td>{b.status}</td>
                                        <td>
                                            <button className='btn btn-success'>Issue</button>
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

export default StudentIssueBooks