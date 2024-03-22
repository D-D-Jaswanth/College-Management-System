import React, { useState, useEffect, useContext} from 'react'
import FacultyNavbar from '../components/FacultyNavbar'
import { store } from '../App'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function FacultyHomepage() {

    const [token, setToken] = useContext(store)
    const [facultyData, setFacultyData] = useState({
        firstname: '',
        lastname: '',
        dob: '',
        gender: '',
        mobilenumber: '',
        email: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        husbandname: '',
        husbandoccupation: '',
        educational: '',
        subject: '',
        experience: '',
        previouscollege: ''
    })

    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:5000/facultyhomepage', {
          headers: {
            'x-token': token
          }
        })
          .then(res => {
            setFacultyData(res.data)
          })
          .catch(err => {
            console.log(err)
          })
      }, [])
    
      if (!token) {
        navigate('/')
      }

    return (
        <>
            <FacultyNavbar />
            <div style={{ marginBottom: "10px" }}>

                <div className='container top'>
                    <div className='left'>
                        {
                            facultyData &&
                            <h4>Welcome User, {facultyData.firstname} {facultyData.lastname}</h4>
                        }
                        <h5>Enjoy online Learning</h5>
                        <p>Today you have three online lessons let's get started.</p>
                    </div>
                    <div className='right'>
                        <h4>Shedule</h4>
                    </div>
                </div>
                <div className='container middle'>
                    <div className='left'>
                        <h4>Performance</h4>
                        <h5>Enjoy online Learning</h5>
                        <p>Today you have three online lessons let's get started.</p>
                    </div>
                    <div className='right'>
                        <h4>Shedule</h4>
                    </div>
                </div>
                {/* <div className='container bottom'>
                    <div className='left'>
                        <h4>Events</h4>
                        <div className='card-container'>
                            <div class="card" style={{ width: "15rem" }}>
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Some quick example</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </>
    )
}

export default FacultyHomepage