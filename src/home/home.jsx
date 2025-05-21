import React, { useState } from 'react'
import './home.css'
import Head from './head/head.jsx'
import Main from './main/main.jsx'
import Footer from './footer/footer.jsx'
function home(props) {
  const [isApply,setIsapply] = useState(false)
  const [name,setname] =useState('')
  const[Mobile,steMobile] =useState(null)
  // console.log(props.IsEnquairy);
  const IsEnquairy = props.IsEnquairy   // Recievd prop from nav component to render enquairy form 
  console.log(IsEnquairy);
  const handleMobile = (e)=>{
    let value = e.target.value
   if(/^\d{0,10}$/.test(value)){
    steMobile(value)
   }
  }
  return (<>
    <div className='container-fluid home-head position-relative'> 
    <h1 className='pb-4'>Rj Technologies..</h1>
    <h4 className='pb-4'>Best Online & Classroom Training Institute</h4>
    <p className='pb-5 fs-6 home-parah'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore at sit quam quasi ullam expedita 
      quis nesciunt sint similique! Cum doloribus praesentium qui maiores animi iure ducimus quam pariatur ipsum?
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum id quod, voluptatibus, excepturi 
       exercitationem eaque sunt corporis et perferendis totam illo blanditiis doloribus voluptas repudiandae 
       quia sint dolorum accusantium aut? Eaque hic rem ex nulla mollitia inventore accusantium ducimus.</p>
       <button className='bg-success px-4 py-2 fw-bold fs-5 border-0 home-btn' onClick={()=>{setIsapply(true)}}>Apply Online</button>
       {isApply && <div className='apply-container'>
        <h5 className='apply-form-title'>Quick Enquairy</h5>
        <form className='mt-4'>
          <input type="text"  placeholder='Name*' value={name} onChange={(e)=>{setname(e.target.value)}} required/><br></br>
          <input type="tel" placeholder='10 Digit Mobile No*' value={Mobile} onChange={handleMobile}  required/><br></br>
          <input type="text" placeholder='Email*' required /><br></br>
          <textarea name="" id="" rows="2" style={{resize:"none",marginBottom:"20px"}}></textarea><br></br>
          <button type='submit' className='apply-form-btn'>I'm Intrested Tell Me More</button>
          <button className='cancel-btn' onClick={()=>setIsapply(false)}><i class="bi bi-x"></i></button>
        </form>
       </div>}

       {IsEnquairy && <div className='enquairy-container '>
          <h5 className='text-center mb-3 text-dark'>Request forClass Room & Online Training Quotation</h5>
          <ul className='enquairy-head'>
          <i class="bi bi-house-door-fill"></i>
          <h5 className='m-0'>Classroom</h5>
          <i class="bi bi-laptop"></i>
          <h5 className='m-0'>Online</h5>
          </ul>
          <input type="text" placeholder='Enter Your Name'required/><br></br>
          <input type="email" placeholder='Enter Your Email' required/><br></br>
          <input type="number" placeholder='Enter Your Mobile No' required/><br></br>
          <select>
            <option value="Select Course">Select Course</option>
            <option value="HTML5">HTML5</option>
            <option value="CSS">CSS</option>
            <option value="Javascript">Javascript</option>
            <option value="React JS">React JS</option>
          </select><br></br>
          <button className='enquairy-btn'>Submit Query</button>
        </div>}

    </div>
    
    <Head/>
    <Main/>
    <Footer/>
    </>
  )
}

export default home