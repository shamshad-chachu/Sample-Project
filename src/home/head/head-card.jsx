import React from 'react'
import './head-card.css'
function headCard(props) {
  const {icon,head,content} = props.item

  return (
       <fieldset className='head-card col-lg-1 col-md-6 '>
      <legend class='legend'>{<i className={`${icon}`}></i>}</legend>
      <h3 className='fw-bolder pb-2 text-center'>{head}</h3>
      <p className='headcard-parah text-start'>{content}</p>
    </fieldset>
  )
}

export default headCard