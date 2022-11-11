import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg position-fixed top-0 end-0 start-0 ">
  <div className="container">

    <a className="navbar-brand text-white" href='#' >Start React</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className='span-menu text-uppercase me-1'>menu</span>
      <span className="navbar-toggler-icon icon-menu"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link " href='#' >Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#'>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#'>contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  )
}
