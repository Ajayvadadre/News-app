import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsPage from './components/NewsPage'

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <NewsPage country="in" apiKey="27a6e7cf59574d35b24c538ae520479e" pageSize={9}/>
      </div>
    )
  }
}

export default App
