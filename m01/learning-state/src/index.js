'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
// import App from './app-with-lifecycle-methods'
import App from './app'

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

// if (module.hot) {
//   module.hot.accept('./app-with-lifecycle-methods', () => {
//     const NextApp = require('./app-with-lifecycle-methods').default
//     renderApp(NextApp)
//   })
// }
if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
