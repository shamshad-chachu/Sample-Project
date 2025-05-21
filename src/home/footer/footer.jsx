import React from 'react'
import './footer.css'
function Footer() {
  return (
    <footer className='row footer ps-md-5 py-md-5 '>
      <div className="col-12 col-md-5 col-lg-3  ps-md-3 ps-lg-4 ms-md-3 ms-lg-0">
      <i class="bi bi-mortarboard-fill text-success footer-icon"></i>
      <h3 className='d-inline-block ms-1 text-success'>Rj Technology</h3>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quasi 
        ipsum, fugiat corrupti culpa porro repudiandae odio? Perferendis veniam corporis, 
        minima nesciunt, eos accusantium ipsam delectus aperiam rerum a perspiciatis.
      </p>
      </div>
      <div className="col-12 col-md-5 col-lg-3  ps-md-5">
        <h3 >Our Services</h3>
        <p>Mobile Apllication Design</p>
        <p>Web Application Design</p>
        <p>Websites Design</p>
        <p>Web User Interface Design</p>
        <p>Web UX Design and Research</p>
        <p>Theame Development Design</p>
      </div>
      <div className="col-12 col-md-5 col-lg-3 ps-md-3 ps-lg-0 ms-md-3 ms-lg-0">
        <h3>Head Office</h3>
        <p>1/2,Marathahalli,Bengaluru
            Karnataka,560017,
            phone:+91 7483428645
            Email: rjtechnology@gmail.com</p>
        <h6>Office Time: 10Am - 6PM</h6>
      </div>
      <div className="col-12 col-md-5 col-lg-3 mt-md-0 mt-4 ps-md-5 ">
        <h3 >Subscribe Us</h3>
        <input type="email" placeholder='Email' />
        <i class="bi bi-telegram email-icon "></i>
        <div className="footer-icons">
        <i class="bi bi-facebook"></i>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-linkedin"></i>
        </div>
      </div>

    </footer>
  )
}

export default Footer