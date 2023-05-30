import Link from 'next/link'
import React from 'react'
import Hero from './Hero';
// import './Header.css'

const Header = () => {
    return (
        <header className="header-wrapper">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" href="#">
                        <img src="./images/logo.png" className="img-fluid" alt="logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        {/* <span class="navbar-toggler-icon"></span> */}
                        <i className="far fa-stream navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav menu-navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/services">
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/Team">
                                    Team
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/Gallery">
                                    Gallery
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/Testimonials">
                                    Testimonial
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/Blog">
                                    Blog
                                </Link>
                            </li>
            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
    
}

export default Header