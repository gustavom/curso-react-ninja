'use strict'

import React from 'react'
//  import ReactDOM from 'react-dom';

//  shorthand notatio - importando direto a propriedade 'render' do react-dom
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

//  var React = require('react');
//  var ReactDOM = require('react-dom');
//  var Title = require('./app');

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <App />
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
