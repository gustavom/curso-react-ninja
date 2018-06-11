'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '2'
    }
  }
  render () {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            console.log('event', e)
          }}
          onChange={(e) => {
            console.log('name', e.target.name)
            console.log('value', e.target.value)
          }}
        >
          <input type='name' name='name' />
          <input type='email' name='email' />
          <textarea name='textarea' defaultValue={'text\nteste'} />
          <button type='submit'>Enviar</button>
        </form>
      </div>
    )
  }
}

export default App

// import React, { Component } from 'react'

// class App extends Component {
//   constructor () {
//     super()
//     this.state = {
//       checked: false,
//       showContent: false
//     }
//   }
//   render () {
//     return (
//       <div>
//         <label>
//           <input
//             type='checkbox'
//             checked={this.state.checked}
//             onChange={() => {
//               this.setState({
//                 checked: !this.state.checked
//               }, () => {
//                 this.setState({
//                   showContent: this.state.checked
//                 })
//               })
//             }}
//           /> Mostrar conteúdo
//         </label>

//         {this.state.showContent && <div>Olha eu aqui!</div>}
//       </div>
//     )
//   }
// }

// export default App
