import React from 'react'
import MainCard from './main-card'
import './main.css'
import Card from './main-card-details'
function Main(props)
{
  const handeleApply = props.handeleApply
  return (
    <div className='row text-center p-5 pt-0'>
      <h1 className='mb-5 main-h1'>Our Courses</h1>
      <p className='px-md-5 mb-5 pb-4 main-parah'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit veniam,
         labore minus quia facere! Minima saepe perspiciatis voluptatibus quisquam quaerat sed similique 
        blanditiis eligendi, animi quae, corrupti molestiae? Repellendus.
      </p>
      <div className="row d-flex gap-4  justify-content-center">
        {Card.map((item)=>{
          return <MainCard props = {item} handeleApply = {handeleApply}/>
        })}
      </div>
       
    </div>
  )
}

export default Main
