import React from 'react';
import { Link } from 'react-router-dom';


const Header = () =>{
    return(
        <>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Muzaffer</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0 pull-right">
                        <li className="nav-item">
                            <Link exact className="nav-link" aria-current="page" to='/'>Home</Link>

                        </li>
                        <li className="nav-item">
                            <Link exact className="nav-link" to='/about'>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link exact className="nav-link" to='/service'>Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link exact className="nav-link" to='/contact'>Contact Us</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                </nav>
        


        </>
    );
}
export default Header;