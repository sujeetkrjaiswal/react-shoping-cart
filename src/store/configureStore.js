import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import initialStateForApp from './initialState'
import localStorageMiddleware from './localStorageMiddleware'

const configureStore = (initialState = initialStateForApp) => {
  const store = createStore(
    combineReducers(reducers),
    initialState,
    applyMiddleware(thunk, localStorageMiddleware),
  )

  if (module.hot) {
    module.hot.accept('../reducers/index', () => {
      const nextReducers = require('../reducers/index') // eslint-disable-line global-require
      store.replaceReducer(combineReducers(nextReducers))
    })
  }

  return store
}

export default configureStore
