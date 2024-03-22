import React from 'react'
import StudentNavbar from '../components/StudentNavbar'

function NotFound() {
    return (
        <>
            <StudentNavbar />
            <div className='notfound'>
                <div className='container'>
                    <h1>404</h1>
                    <p>Page Not Found !</p>
                </div>
            </div>
        </>
    )
}

export default NotFound