import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
  
   <nav
    className="navbar navbar-expand-sm p-4" style={{backgroundColor:'#2c3e50'}} >
    <div className="container ">
        <a className="navbar-brand text-light fw-bolder fs-2" href="#">START FRAMEWORK</a>
        <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0 me-4 ">
            
                <li className="nav-item ">
                    <Link className="nav-link text-light fw-bolder fs-6 p-3" to="about">ABOUT</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light fw-bolder fs-6 p-3" to="port">PORTFOLIO</Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link text-light fw-bolder fs-6 p-3" to="contact">CONTACT</Link>
                </li>
            </ul>
          
        </div>
    </div>
   </nav>
   
    
  )
}
