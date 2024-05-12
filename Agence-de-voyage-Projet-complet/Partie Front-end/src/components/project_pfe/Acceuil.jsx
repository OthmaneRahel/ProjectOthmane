import React, { useEffect, useState } from 'react';
import {Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import Footer from "./footer";
import './NavBar.css';
function Menupfe() {
    //style={{boxShadow: '7px 7px 5px -5px rgba(0,0,0,0.2)'}}
    return (
        <div>
            <Router>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/listef">
                        <h3 className='text text-primary'>  <img src='logopfe.jpg' width={'60px'} /> NEZAHA VOYAGE</h3>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/aff">
                                    <i class="fa-solid fa-house"></i> Accueil
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-dark" to="/listef">
                                    <i class="fa-solid fa-person-walking-luggage"></i> Voyage organisé
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-dark" to="/ajouterfilm">
                                    <i class="fa-solid fa-kaaba"></i> Haj et Omra
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-dark" to="/ajouterfilm">
                                    <i class="fa-solid fa-plane-departure"></i> Vol
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/ajouterfilm">
                                    <i class="fa-solid fa-id-badge"></i> Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Router>
        <Footer/>
        </div>
    );
}

export default Menupfe;
