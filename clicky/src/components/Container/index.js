import React, { Component } from 'react'
import Card from '../Card'
import Header from '../Header'
import Title from '../Title'
import Footer from '../Footer'
import shuffle from '../../../node_modules/shuffle-array'
import friends from '../../friends.json'
import './style.css'

class Container extends Component {
  state = {
    friends,
    score: 0,
    topScore: 0,
    response: 'Click a picture to begin'
  }

  resetState = () => {
    const resetClick = this.state.friends.map(friend => {
      const obj = { ...friend, clicked: false }
      return obj
    })
    return this.setState({
      friends: shuffle([...resetClick]),
      score: 0,
      response: 'You guessed incorrectly!'
    })
  }

  score = arr => this.setState({ score: arr.length })

  topScore = () => {
    console.log(this.state.score)
    if (this.state.score >= this.state.topScore) {
      console.log(this.state.score)
      return this.setState({ topScore: this.state.score + 1 })
    }
  }

  cardSelected = id => this.state.friends.filter(friend => friend.id === id)

  cardAlreadySelected = () =>
    this.state.friends.filter(friend => friend.clicked)

  findIndex = (id, arr) => arr.map(obj => obj.id).indexOf(id)

  update = (i, val, list) => {
    return [...list.slice(0, i), val, ...list.slice(i + 1)]
  }

  updateState = id => {
    const cardClicked = this.cardSelected(id)[0]
    const cardObj = { ...cardClicked, clicked: true }
    const index = this.findIndex(id, this.state.friends)
    const newFriends = this.update(index, cardObj, this.state.friends)

    return this.setState({
      friends: shuffle(newFriends),
      score: this.state.score + 1,
      response: 'You guessed correctly!'
    })
  }

  gameLogic = id => {
    if (this.cardAlreadySelected().includes(...this.cardSelected(id))) {
      return this.resetState()
    }
    this.updateState(id)
    return this.topScore()
  }

  render() {
    return (
      <div className='container'>
        <Header
          response={this.state.response}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Title />
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
        <Footer />
      </div>
    )
  }
}

export default Container
