'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'

class App extends Component {
  render () {
    return (
      <div data-id='1' className='container'>
        <Title/>
        {['blue', 'red', 'green'].map((square, index) => (
          <Square key={index} text={index + 1} color={square} />
        ))}
      </div>
    )
  }
}

// const App = React.createClass({
//   render: function () {
//     return (
//       <div data-id='1' className='container'>
//         <Title name='Unerds' lastname='Ferds' />
//       </div>
//     )
//   }
// })

export default App
