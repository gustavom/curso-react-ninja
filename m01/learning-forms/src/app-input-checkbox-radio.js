'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'Valor inicial',
      checked: false
    }
  }
  render () {
    return (
      <div>
        <form>

          <input type='text' value={this.state.value} onChange={(e) => {
            this.setState({
              value: e.target.value
            })
          }} />

          <br />

          <label>
            <input type='checkbox' value='my-checkbox' checked={this.state.checked} onChange={(e) => this.setState({ checked: e.target.checked })} /> Checkbox com onChange
          </label>

          <br />

          <label>
            <input type='checkbox' value='my-checkbox' defaultChecked /> Checkbox com defaultChecked
          </label>

          <br />

          <label>
            <input type='radio' name='my-radio' value='1' defaultChecked /> Radio 1
          </label>

          <br />

          <label>
            <input type='radio' name='my-radio' value='2' /> Radio 2
          </label>
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
