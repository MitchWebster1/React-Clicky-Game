import React from './react'
import './style.css'

function Card (props) {
  return (
    <div className='card'>
      <img alt={props.name} src={props.image} />
    </div>
  )
}

export default Card
