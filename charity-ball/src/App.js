import React, { Component } from 'react'

import './App.css'
import List from './List'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">CharityBall</h1>
          <p className="App-intro">
          Relevant Statistics on Colorado Non-Profit Organizations
        </p>
        </header>
        
        <List />
      </div>
    )
  }
}

export default App
