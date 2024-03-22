import React from 'react'
import Image1 from '../images/img1.jpg'
import Image2 from '../images/img2.jpg'
import Image3 from '../images/img3.jpg'

function Header() {
    return (
        <header>
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Image1} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Tom Hanks</h5>
                                <p>College isn't necessary for everybody and it's only from what you put into it what you fo there for.</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Image2} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Dr. Seuss</h5>
                                <p>Reading can take you places you have never been before.</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Image3} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Joseph Addison</h5>
                                <p>Reading is to the mind what exercise is to the body</p>
                            </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </header>
    )
}

export default Header