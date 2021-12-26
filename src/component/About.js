import React from "react";
import slide3 from'../slider3.jpg';

const About = (props) =>{
    document.title = props.title;
    return(
            <>
            <div class="container-fluid nav-bg">
                <div class="row">
                <header class="section-header text-center text-info">
                    <h1>About Us</h1>
                </header>
                    <section id="about" class="about">
                        <div class="container" data-aos="fade-up">
                        <div class="row gx-0">

                            <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            <div class="content">
                                <h2>Who We Are</h2>
                                <h4>Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</h4>
                                <p>
                                Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
                                </p>
                                <div class="text-center text-lg-start">
                                <a href="#" class=" btn btn-primary btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                    <span>Read More</span>
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                                </div>
                            </div>
                            </div>

                            <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                            <img src={slide3} class="img-fluid" alt="" />
                            </div>

                        </div>
                        </div>

            </section>
        </div>
        </div>
            </>
    );
}
export default About;