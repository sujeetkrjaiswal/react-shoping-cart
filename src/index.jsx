import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line
import Root from './components/index'
import './scss/global.scss'

render(
  <AppContainer>
    <Root />
  </AppContainer>,
document.getElementById('reactMountNode'),
)

if (module.hot) {
  module.hot.accept('./components/index', () => {
    const NewRoot = require('./components/index').default; // eslint-disable-line
    render(
      <AppContainer>
        <NewRoot />
      </AppContainer>,
      document.getElementById('reactMountNode'),
    )
  })
}
