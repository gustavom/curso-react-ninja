'use strict'

// import VARIAVEL from 'de onde vem' se nao indicar a pasta, ele pega direto do node_modules

import React from 'react' // shorthand notation es2015
//  import ReactDOM from 'react-dom';
import { render } from 'react-dom' //  shorthand notation - importando o método 'render' direto de react-dom - assim elimina o prefixo ReactDOM.render(), fica so render()
import { AppContainer } from 'react-hot-loader'
import App from './app' // shorthand notation es2015

//  var React = require('react');
//  var ReactDOM = require('react-dom');
//  var Title = require('./app');

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
    )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default

    renderApp(NextApp)
  })
}
