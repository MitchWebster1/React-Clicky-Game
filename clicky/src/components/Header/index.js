import React from 'react'
import './style.css'

function Header (props) {
  return (
    <main>
      <div>Clicky Game</div>
      <div>{props.response}</div>
      <div>
        Score: {props.score} | Top Score: {props.topScore}
      </div>
    </main>
  )
}

export default Header
