import React, { useState } from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from "../home/home.jsx"
import './nav.css'

function nav() {

  const [IsEnquairy,setIsEnquairy] = useState(false)
  return (
    <Router>
    <div className="">
      <marquee behavior="alternate" direction="rtl" className='bg-warning p-0 mb-1'>
        <h3 className='marquee'>Our best offer Ever Summer Special -Get 3 Courses at 22499/- Only <a href="/" className='text-primary fs-6 ms-2'>Read More</a></h3>
      </marquee>
      <header className='d-md-flex  align-items-center p-3' >
        <div className="col-md-8 col-12 d-flex gap-lg-5 gap-5 gap-md-3 align-items-center">
        <h4 >Email: <span className='header-span'>rjtechnology@gmail.com</span></h4>
        <h4 >Contact <span className='header-span'>+91 9025741101</span></h4>
        </div>
        <div className="col-md-4 col-12 d-flex fs-3 text-center gap-4 gap-lg-5 justify-content-between px-5">
        <i class="bi bi-facebook "></i>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-linkedin"></i>
        </div>
      </header>

      <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand fs-2" href="#"><i class="bi bi-mortarboard-fill text-success"></i>
    <span className='text-success fw-bold ms-1'>Rj Technology</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>{
      setIsEnquairy(false)
    }}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse nav-items " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-4 d-lg-flex align-items-center d-block ">
        <Link to="/" className='text-decoration-none'><li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li></Link>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Course
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Front End</a></li>
            <li><a class="dropdown-item" href="#">Back End</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Online Training</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
        <button type="button" class="btn btn-success px-3 py-1  ms-0 ms-lg-5 ms-0  nav-btn" onClick={()=>{
          setIsEnquairy(!IsEnquairy)
        }}>Enquiry</button>
      </ul>
    </div>
  </div>
</nav>
    </div>
    <Routes>
    <Route path='/' element={<Home IsEnquairy={IsEnquairy}/>}>
    </Route>
    </Routes>
    </Router>
  )
}

export default nav