import React from 'react'
import './style.css'

function Header(props) {
  return (
    <main className='headerBar'>
      <div className='game'>Clicky Game</div>
      <div className='response'>{props.response}</div>
      <div className='score'>
        Score: {props.score} | Top Score: {props.topScore}
      </div>
    </main>
  )
}

export default Header
