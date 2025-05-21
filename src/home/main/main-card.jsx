import React from 'react'
import './main-card.css'
function MainCard(props) {
  const {head,content,title,icons}=props.props;
  return (
    <div className='col-md-4 col-lg-1 col-12 main-card p-0'>
      <h2 className='main-card-h1 py-2 m-0 fs-3'>{head}</h2>
      <div className='main-card-card'>
        <h4 className='fs-5 pb-3 main-card-card-h1'>{title}</h4>
        <div className='text-warning fs-5 d-flex justify-content-center gap-1 mb-3'>
        {icons.map((item)=>{
         return <i class={`${item}`}></i>
        })}
        </div>
        <p className='main-card-parah'>{content} </p>
        <button className='main-card-btn'>Apply Online</button>
      </div>
    </div>
  )
}

export default MainCard