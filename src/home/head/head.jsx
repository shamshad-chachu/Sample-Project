import React from 'react'
import HeadCard from './head-card'
import './head.css'
import Items from './head-details.jsx'
function head() {
  return (<>
    <div className='row p-5 d-flex justify-content-center align-items-center  gap-3'>
      <h1 className='text-center pb-5'>Key Features</h1>
      <p className='head-parah pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit veniam, labore minus quia
         facere! Minima saepe perspiciatis voluptatibus quisquam quaerat sed similique blanditiis eligendi, 
         animi quae, corrupti molestiae? Repellendus.</p>
           <div className='row d-flex justify-content-center gap-3'>
           {Items.map((item)=>{
              return <HeadCard item={item}/>
            })}
           </div>
    </div>
    </>
  )
}

export default head