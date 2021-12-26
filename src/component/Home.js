import React from "react";
import mainLogo from'../digital.jpg';
import slide1 from'../slider1.jpg';
import slide2 from'../slider2.jpg';
import slide3 from'../slider3.jpg';
const Home = (props) =>{
    document.title = props.title;

    const style = {
        width: '18rem',
        marginLeft: '118px',
        marginTop: '15px'
      };

    return(
        <>
        <section className="p-2">
           <div class="container-fluid nav-bg">
                <div class="row">
                    <div class="col-md-6 pt-5 pt-lg-0">
                        <div class="card1" style={style}>
                            <div class="card-body text-center">
                                <h3 class="card-title">Our Team</h3>
                                <p class="card-text">We ara the aweasom team to create and building and website with static and dynamic website .</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 imgcustom">
                        <img src={mainLogo} alt="digital" with="250" height="200"/>
                    </div>
                </div>
            </div>
            </section>
            <section className="m-10 p-2">
            <div class="container-fluid nav-bg">
                <div className="row">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner customHeight">
                            <div className="carousel-item active">
                            <img src={slide1} className="d-block w-100 height-200" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src={slide2} className="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src={slide3} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
        </>
    );
}
export default Home;