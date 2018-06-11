'use strict'

import React, { Component } from 'react'
// import Button from './button'
// import Square from './square'
import Timer from './timer'

class App extends Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     text: 'Super method'
  //   }
  // }
  constructor () {
    console.log('constructor app foi agora')
    super()
    this.state = {
      color: 'red',
      time: 0,
      showTimer: true
    }
  }

  componentWillMount () {
    console.log('componentWillMount app aconteceu agora')
  }

  componentDidMount () {
    console.log('componentDidMount app aconteceu agora')
  }
  render () {
    console.log('render app')
    return (
      <div>
        <Timer time={this.state.time} />
        <button onClick={() => {
          this.setState({ time: this.state.time + 10 })
        }}>Change Props two new</button>
      </div>
    )
  }
  // render () {
  //   console.log('render')
  //   return (
  //     <div>
  //       {this.state.showTimer && <Timer time={this.state.time} />}
  //       <button onClick={() => {
  //         this.setState({ showTimer: !this.state.showTimer })
  //       }}>Show Hide Timer</button>
  //     </div>
  //   )
  // }

  // render () {
  //   console.log('render')
  //   return (
  //     <div>
  //       <Square color={this.state.color} />
  //       {['red', 'green', 'blue', 'purple', 'gold'].map((color) => (
  //         <Button
  //           key={color}
  //           handleClick={() => this.setState({ color })}>
  //           {color}
  //         </Button>
  //       ))}
  //     </div>
  //   )
  // }
  // render () {
  //   return (
  //     <div className='container' onClick={() => this.setState({
  //       text: 'Other Text'
  //     })}>
  //       {this.state.text}
  //     </div>
  //   )
  // }
}

// componente construido com função pura, não aceita o state
// const App = () => (
//   <div className='container'>
//     {this.state.text}
//   </div>
// )

export default App
