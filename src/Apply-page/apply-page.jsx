import React from 'react'
import './apply-page.css'
function Applypage() {
  return (
    <div className="row apply-page-row text-light">
        <div className=" col-12  col-md-5 col1 pe-0">
          <div className='col1-content'> <h1 className='fw-bold mb-0'>RJ</h1>
              <h4>Technology</h4>
              <div>
                <p className='display-4 fw-bold mt-4 col1-big'>M.VERVE</p>
                <p className='fs-5'>Inspired Applications</p>
              </div>
              <p className='mb-0 mt-4 fs-5 '>To connect with us</p>
              <p className='col1-small fs-5'>please enter the details</p>
          </div>
        </div>
      <div className="col-12 col-md-7 text-dark  apply-page-from">
        <h2>Create an account</h2>
        <form action="" className='row w-100 '>
            <div className="col-md-4  mb-2">
              <label htmlFor="name">First Name</label><br/>
              <input type="text" placeholder='First Name' id='name' className='w-100'/>
            </div>
            <div className="col-md-4 mb-2">
              <label htmlFor="last-name">Last Name</label><br/>
              <input type="text" placeholder='Last Name' id='last-name'  className='w-100'/>
            </div>
            <div className="col-md-4 mb-2">
              <label htmlFor="age">Age</label><br/>
              <input type="text" placeholder='18-100' id='age'  className='w-100'/>
            </div>
            <div className="col-md-6 mb-2"> 
              <label htmlFor="number">Mobile Number</label><br/>
              <input type="text" placeholder='****' id='number' className='w-100'/>
            </div>
            <div className="col-md-6 mb-2">
              <label htmlFor="email">Email</label><br/>
              <input type="text"  placeholder='abc@xxx.zzz' id='email' className='w-100'/>
            </div>
            <div className="col-12 mb-2">
              <label htmlFor="description">Description</label><br/>
              <textarea name="" id="description" className='w-100' style={{resize:'none'}} rows='4'></textarea>
              <p className='text-end'>Max.150 characters</p>
            </div>
            <div className="col-md-6 mb-md-5 mb-3">
              <label htmlFor="password">Password</label><br/>
              <input type="text" id='password' placeholder='Password'className='w-100' />
            </div>
            <div className="col-md-6 mb-md-5 mb-4">
              <label htmlFor="Cpassword">Comfirm Password</label><br/>
              <input type="text" id='Cpassword' placeholder='Comfirm Password' className='w-100'/>
            </div>
            <div className="col-12 btn-box">
              <button>Reset</button>
              <button>submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Applypage