import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary bg-primary" data-bs-theme="dark" style={{ padding: "1% 8%" }}>
                <div class="container-fluid">
                    <Link class="navbar-brand" href="#">CMS</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse m-2" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-4 mb-lg-0 justify-content-center">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page">About us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="#">Link</Link>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                            <li class="nav-item">
                                <Link to='/login' class="nav-link" aria-disabled="true">Student</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/adminlogin' class="nav-link" aria-disabled="true">Admin</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/facultylogin' class="nav-link" aria-disabled="true">Faculty</Link>
                            </li>
                        </ul>
                        {/* <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar