import React from 'react'
import './home.css'
import Head from './head/head.jsx'
function home() {
  return (<>
    <div className='container-fluid home-head text-white'> 
    <h1 className='pb-4'>Rj Technologies..</h1>
    <h4 className='pb-4'>Best Online & Classroom Training Institute</h4>
    <p className='pb-5 fs-6 home-parah'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore at sit quam quasi ullam expedita 
      quis nesciunt sint similique! Cum doloribus praesentium qui maiores animi iure ducimus quam pariatur ipsum?
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum id quod, voluptatibus, excepturi 
       exercitationem eaque sunt corporis et perferendis totam illo blanditiis doloribus voluptas repudiandae 
       quia sint dolorum accusantium aut? Eaque hic rem ex nulla mollitia inventore accusantium ducimus.</p>
       <button className='bg-success text-light px-4 py-2 fw-bold fs-5 border-0'>Apply Online</button>
    </div>
    <Head/>
    </>
  )
}

export default home