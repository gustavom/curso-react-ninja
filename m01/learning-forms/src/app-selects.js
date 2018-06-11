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
        <form>

          <select value={this.setState.value} onChange={(e) => {
            this.setState({
              value: e.target.value
            })
          }}>
            <option value='1'>Opção 1</option>
            <option value='2'>Opção 2</option>
            <option value='3'>Opção 3</option>
          </select>
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
