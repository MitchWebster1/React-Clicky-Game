import React, { Component } from 'react'
import './style.css'

function Card(props) {
  // clicked = id => this.state.friends.filter(friend => friend.id === id)
  // () => this.clickedArr(this.props.id)

  return (
    <div className='card' onClick={() => props.gameLogic(props.id)}>
      <img alt={props.name} src={props.image} />
    </div>
  )
}

export default Card
