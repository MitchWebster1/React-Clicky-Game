import React, { Component } from 'react'
import Wrapper from './components/Wrapper'
import Card from './components/Card'
import Header from './components/Header'
import Title from './components/Title'
import Footer from './components/Footer'
import friends from './friens.json'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    friends
  }

  render() {
    return (
      <Wrapper>
        {this.state.friends.map(friend => (
          <Card
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App
