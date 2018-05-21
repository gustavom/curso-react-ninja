'use stritc'

import React from 'react'

const Title = ({ name, lastname }) => (
  <h1>Hi {`${name} ${lastname}`}</h1>
) // em arrow function, quando vc tem apenas o return, pode indicar direto após a setinha

Title.defaultProps = {
  name: 'Desconhecido',
  lastname: 'Sem Sobrenome'
}

// const Title = React.createClass({
//   getDefaultProps: function () {
//     return {
//       name: 'Desconhecido',
//       lastname: {
//         first: 'Sem',
//         last: 'LastName'
//       }
//     }
//   },
//   render: function () {
//     return (
//       <h1>Print Name: {this.props.name + ' ' + this.props.lastname.first + this.props.lastname.last}!</h1>
//     )
//   }
// })

export default Title
