import React, { Component } from 'react'
import Card from '../Card'
import friends from '../../friends.json'
import './style.css'

class CardWrapper extends Component {
  state = {
    friends,
    score: 0,
    topScore: 0
  }

  resetState = () => {
    const arr = [...this.state.friends]
    const resetClick = arr.map(friend => (friend.clicked = false))
    console.log(resetClick)
    return this.setState({
      // friends: [...friends, ...resetClick],
      score: 0
    })
  }

  score = arr => this.setState({ score: arr.length })

  topScore = arr => {
    if (arr.length > this.state.topScore) {
      return this.setState({ topScore: arr.length })
    }
  }

  cardSelected = id => this.state.friends.filter(friend => friend.id === id)

  cardAlreadySelected = () =>
    this.state.friends.filter(friend => friend.clicked)

  gameLogic = id => {
    if (this.cardAlreadySelected().includes(...this.cardSelected(id))) {
      return this.resetState()
    }
    return console.log('not yet selected')
  }

  render() {
    return (
      <div className='wrapper'>
        {this.state.friends.map(friend => (
          <Card
            gameLogic={this.gameLogic}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={friend.clicked}
          />
        ))}
      </div>
    )
  }
}

export default CardWrapper
