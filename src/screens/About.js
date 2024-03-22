import React from 'react'
import ImageCMS from '../images/cms.jpg'

function About() {
    return (
        <>
            <section>
                <center><h1>About Us</h1></center>
                <div className='about'>
                    <img src={ImageCMS} alt='' />
                    <div>
                        <p>
                            A college management system is an ERP solution that enables the institutes to conduct online admissions, generate reports, create ID cards, enable online communication, manage curriculum, time tables and conduct online evaluations, track student progress, conduct data analysis, teach remotely, and handle enquiries and leads for admissions in the college.

                            MasterSoft College Management System is an end-to-end solution for colleges to improve operational efficiency & institutional outcomes by automating Student-Faculty lifecycle & campus administration.

                            This college ERP software is designed keeping in mind the different operations of a college.college ERP

                            MasterSoft's College ERP has 25+ pro modules and 30+ inbuilt modules. It helps educators to streamline all the core activities with biometrics, BI tools, and an analytics dashboard that generates precise reports on college admission, scholarship, compliance management, etc.
                        </p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default About