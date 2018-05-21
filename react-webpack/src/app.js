'use strict'

//  var React = require('React');
import React from 'react' //  es2015 // shorthand notation es2015

// var Title = React.createClass({
//     render: function(){
//         return React.createElement('h1', null, 'Título');
//     }
// });

const App = React.createClass({
  render: function () {
    return <h1>Aplicação Renderizando React Application.</h1>
  }
})

//  module.exports = Title;
export default App // shorthand notation es2015
