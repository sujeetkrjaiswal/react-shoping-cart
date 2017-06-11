import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'
import configStore from '../store/configureStore'
import NavBar from './nav'
import Items from './items'
import Cart from './cart'
import Toast from './toastMsg'


const Root = () => (
  <Provider store={configStore()}>
    <Router>
      <section>
        <NavBar />
        <Route exact path="/" component={Items} />
        <Route path="/cart" component={Cart} />
        <Toast timer={3000} />
      </section>
    </Router>
  </Provider>
)


export default Root
