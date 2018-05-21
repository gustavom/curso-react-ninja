'use strict'

import React, { Component } from 'react'
// import Title from './title'
// import Square from './square'
import Button from './button'
import LikeButton from './like-button'
import SearchButton from './search-button'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <Button>Texto</Button>
        <LikeButton />
        <SearchButton />
      </div>
    )
  }
}

// class App extends Component {
//   render () {
//     return (
//       <div className='container' onClick={function (e) {
//         alert('clicou')
//       }}>
//         <Square />
//       </div>
//     )
//   }
// }

// class App extends Component {
//   render () {
//     return (
//       <div data-id='1' className='container'>
//         {['blue', 'red', 'green'].map((square, index) => (
//           <Square key={index} text={index + 1} color={square} />
//         ))}
//       </div>
//     )
//   }
// }

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
